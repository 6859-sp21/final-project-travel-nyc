import React from "react";
import ReactMapGL from "react-map-gl";
import {
  ArcLayer,
  ColumnLayer,
  DeckGL,
  HexagonLayer,
  ScatterplotLayer,
  TripsLayer,
} from "deck.gl";
import { DataFilterExtension, BrushingExtension } from "@deck.gl/extensions";
import { easeCubicInOut } from "d3";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import Legend from "./Legend";
import { MAPBOX_TOKEN } from "./keys";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function Map({
  width,
  height,
  viewState,
  onViewStateChange,
  stations,
  trips,
  time_filter,
  loading,
  isPlaying,
  setHighlight,
  resetFilter,
  resetView,
}) {
  const initCounters = () => {
    const zeros = {};
    stations.forEach((s) => {
      zeros[s.id] = 0;
    });
    return zeros;
  };

  const filterChange = () => {
    const update = initCounters();
    let highlightCounter = 0;
    // const update = initCounters();
    trips.forEach((element) => {
      if (
        element.start_minutes >= time_filter[0] &&
        element.start_minutes <= time_filter[1]
      ) {
        highlightCounter += 1;
        if (selectedStation === undefined) {
          // get net flow if nothing is selected
          update[element.end_id] += 1;
          update[element.start_id] -= 1;
        } else {
          //  get net flow with respect to selected station
          if (
            element.start_id === selectedStation ||
            element.end_id === selectedStation
          ) {
            update[element.start_id] -= 1;
            update[element.end_id] += 1;
          }
        }
      }
    });
    // console.log(update);
    // if (init) setChange(change + 1);
    update["highlight"] = highlightCounter;
    return update;
  };

  const filterTrips = () => {
    const newTrips = trips.filter((element) => {
      return (
        element.start_minutes >= time_filter[0] &&
        element.start_minutes <= time_filter[1]
      );
    });
    return newTrips;
  };

  const brushingExtension = new BrushingExtension();

  const red = [255, 0, 0];
  const light_red = [255, 0, 0, 50];
  const green = [0, 255, 0];
  const light_green = [0, 255, 0, 50];

  const neutral = [255, 0, 0, 70];

  const [selectedStation, setSelectedStation] = React.useState(undefined);
  const [counters, setCounters] = React.useState(initCounters());
  const [highlightCount, setHighlightCount] = React.useState(0);
  const [filteredTrips, setFilteredTrips] = React.useState(filterTrips());

  const [brushing, setBrushing] = React.useState(false);
  const [brushRadius, setBrushRadius] = React.useState(100);
  const [aggregate, setAggregate] = React.useState(false);
  const [pickupAgg, setpickupAgg] = React.useState(true);
  const [arcType, setArcType] = React.useState("source");

  // React.useEffect(() => {
  //   const res = filterChange();
  //   console.log();
  //   setCounters(res);
  //   setHighlightCount(res["highlight"]);
  // }, [selectedStation, loading, time_filter]);

  React.useEffect(() => {
    setFilteredTrips(filterTrips());
  }, [time_filter, loading]);

  function getTooltip({ object }) {
    if (!object) {
      return null;
    }
    // console.log(object);

    if (pickupAgg) {
      const lat = object.position[1];
      const lng = object.position[0];
      const count = object.points.length;
      return (
        object &&
        `\
        Hexbin LatLng: ${[lat, lng]}
        Number of taxi pickups: ${count}`
      );
    } else {
      const lat = object.position[1];
      const lng = object.position[0];
      const count = object.points.length;
      return (
        object &&
        `\
        Hexbin LatLng: ${[lat, lng]}
        Number of taxi dropoffs: ${count}`
      );
    }
    return null;
  }

  const layers = [
    new HexagonLayer({
      id: "pickup-agg",
      data: filteredTrips,
      elevationRange: [0, 3000],
      elevationScale: 1,
      extruded: true,
      opacity: 0.7,
      visible: aggregate && pickupAgg,
      radius: 100,
      coverage: 0.7,
      pickable: true,
      getPosition: (d) => d.start_position,
      autoHighlight: true,
    }),
    new HexagonLayer({
      id: "dropoff-agg",
      data: filteredTrips,
      elevationRange: [0, 3000],
      elevationScale: trips && trips.length ? 1 : 0,
      extruded: true,
      opacity: 0.7,
      visible: aggregate && !pickupAgg,
      radius: 100,
      coverage: 0.7,
      pickable: true,
      autoHighlight: true,
      getPosition: (d) => d.end_position,
    }),
    new ScatterplotLayer({
      id: "pickup",
      data: filteredTrips,
      getPosition: (d) => d.start_position,
      getFillColor: light_green,
      visible: !aggregate,
      getRadius: 5,
    }),
    new ScatterplotLayer({
      id: "dropoff",
      data: filteredTrips,
      getPosition: (d) => d.end_position,
      getFillColor: light_red,
      visible: !aggregate,
      getRadius: 5,
    }),
    new ScatterplotLayer({
      id: "pickup-brushed",
      data: filteredTrips,
      getPosition: (d) => d.start_position,
      getFillColor: green,
      getRadius: 5,
      brushingRadius: brushRadius,
      brushingEnabled: brushing,
      visible: !aggregate,
      extensions: [brushingExtension],
    }),
    new ScatterplotLayer({
      id: "dropoff-brushed",
      data: filteredTrips,
      getPosition: (d) => d.end_position,
      getFillColor: red,
      getRadius: 5,
      brushingRadius: brushRadius,
      brushingEnabled: brushing,
      visible: !aggregate,
      extensions: [brushingExtension],
    }),
    new ArcLayer({
      id: "arc-layer",
      data: filteredTrips,
      getSourcePosition: (d) => d.start_position,
      getTargetPosition: (d) => d.end_position,
      getSourceColor: (d) => {
        return green;
      },
      getTargetColor: (d) => {
        return red;
      },
      visible: true,
      opacity: 0.2,
      updateTriggers: {
        getSourceColor: [time_filter],
        getTargetColor: [time_filter],
      },
      brushingRadius: brushRadius,
      brushingEnabled: brushing,
      visible: brushing && !aggregate,
      brushingTarget: arcType,
      extensions: [brushingExtension],
    }),
  ];

  return (
    <div>
      <Legend
        counts={highlightCount}
        resetFilter={resetFilter}
        resetView={resetView}
        brushing={brushing}
        setBrushing={setBrushing}
        aggregate={aggregate}
        setAggregate={setAggregate}
        brushRadius={brushRadius}
        setBrushRadius={setBrushRadius}
        pickupAgg={pickupAgg}
        setPickupAgg={setpickupAgg}
        arcType={arcType}
        setArcType={setArcType}
      />
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        width={width}
        height={height}
        viewState={viewState}
        onViewStateChange={onViewStateChange}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      >
        <DeckGL viewState={viewState} layers={layers} getTooltip={getTooltip} />
      </ReactMapGL>
    </div>
  );
}
