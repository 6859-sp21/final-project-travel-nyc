import { React, Component } from "react";
import { FlyToInterpolator } from "react-map-gl";
import Map from "./Map";
import { station_info } from "../stations";
import { list_stations } from "../list_stations";
import { csv } from "d3";
import trip_data from "./taxis.csv";
import RangeInput from "./RangeInput";
import WelcomeModal from "./WelcomeModal";

const nyc = {
  longitude: -74,
  latitude: 40.72,
  zoom: 13.5,
  pitch: 45,
  bearing: 0
};

const jc = {
  latitude: 40.725779443680345,
  longitude: -74.05589375312678,
  zoom: 13,
  bearing: 0.8015740858150702,
  pitch: 40.9,
};

class MapWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewState: nyc,
      station_info: station_info,
      stations: list_stations,
      trips: [],
      loading: true,
      time_filter: [600, 780],
      playing: false,
      highlightStation: undefined,
      highlightCount: 0,
    };
  }

  setViewState = (viewState) => {
    this.setState({ viewState });
  };

  setFilter = (filter) => {
    this.setState({
      time_filter: filter,
    });
  };

  resetFilter = () => {
    this.setState({
      time_filter: [600, 780],
    });
  };

  resetView = () => {
    this.handleFlyTo(nyc);
  };

  setHighlight = (name, count) => {
    this.setState({
      highlightStation: name,
      highlightCount: count,
    });
  };

  formatLabel = (t) => {
    const hour = ("00" + Math.floor(t / 60)).slice(-2);
    const minutes = ("00" + (t % 60)).slice(-2);
    return `${hour}:${minutes}`;
  };

  handleChangeViewState = ({ viewState }) => {
    this.setViewState(viewState);
  };

  handleFlyTo = (destination) => {
    this.setViewState({
      ...this.state.viewState,
      ...destination,
      transitionDuration: 1500,
      transitionInterpolator: new FlyToInterpolator(),
    });
  };

  togglePlaying = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  componentDidMount() {
    csv(trip_data, function (d) {
      const pickup_time = new Date(d["tpep_pickup_datetime"]);
      const dropoff_time = new Date(d["tpep_dropoff_datetime"]);
      return {
        taxi_type: +d['VendorID'],
        duration: (dropoff_time - pickup_time)/60000, // this is in minutes
        distance: +d["trip_distance"],
        // start_datetime: d["tpep_pickup_datetime"],
        passenger_count: +d["passenger_count"],
        start_time: pickup_time.toTimeString(),
        start_minutes: pickup_time.getHours() * 60 + pickup_time.getMinutes(),
        fare_amount: +d["fare_amount"],
        tip_amount: +d["tip_amount"],
        total_amount: +d["total_amount"],
        start_position: [+d["pickup_longitude"], +d["pickup_latitude"]],
        end_position: [+d["dropoff_longitude"], +d["dropoff_latitude"]],
      };
    })
      .then((data) => {
        const start_cut = new Date("01-01-2020");
        const stop_cut = new Date("05-01-2020");
        // const filter_data = data.filter(
        //   (d) =>
        //     d.start_position[0] != null &&
        //     d.start_position[1] != null &&
        //     d.end_position[0] != null &&
        //     d.end_position[1] != null &&
        //     d.start_id in this.state.station_info &&
        //     d.end_id in this.state.station_info &&
        //     new Date(d.start_datetime) > start_cut &&
        //     new Date(d.start_datetime) < stop_cut
        // );
        const filter_data = data;
        this.setState({
          trips: filter_data,
          loading: false,
        });
      })
      .then(() => {
        this.handleFlyTo(nyc);
      });
  }

  render() {
    return (
      <div>
        <WelcomeModal loading={this.state.loading} />
        <Map
          width="100vw"
          height="100vh"
          viewState={this.state.viewState}
          onViewStateChange={this.handleChangeViewState}
          stations={this.state.stations}
          trips={this.state.trips}
          toggle={this.state.toggle}
          time_filter={this.state.time_filter}
          loading={this.state.loading}
          isPlaying={this.state.playing}
          resetFilter={this.resetFilter}
          resetView={this.resetView}
        ></Map>
        <RangeInput
          min={0}
          max={1439}
          value={this.state.time_filter}
          animationSpeed={10}
          formatLabel={this.formatLabel}
          onChange={this.setFilter}
          togglePlaying={this.togglePlaying}
        />
      </div>
    );
  }
}

export default MapWrapper;
