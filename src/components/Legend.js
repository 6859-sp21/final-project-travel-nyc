import React, { useState, useEffect } from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import IconHelp from "@material-ui/icons/Help";
import Slider from "@material-ui/core/Slider";
import { ThemeProvider } from "@material-ui/styles";
import { ButtonGroup } from "@material-ui/core";

export default function Legend({
  counts,
  resetFilter,
  resetView,
  brushing,
  setBrushing,
  aggregate,
  setAggregate,
  brushRadius,
  setBrushRadius,
  pickupAgg,
  setPickupAgg,
  arcType,
  setArcType,
}) {
  const [printCount, setPrintCount] = useState(0);
  useEffect(() => {
    setPrintCount(((counts / 75960) * 100).toFixed(2));
  }, [counts]);

  const PositionContainer = styled("div")({
    position: "absolute",
    zIndex: 1,
    top: "2em",
    left: "2em",
    width: "40%",
  });

  const CenterContainer = styled("div")({
    color: "#dddddd",
    borderColor: "rgb(72,72,72)",
    padding: "1em",
    position: "",
    zIndex: 1,
    height: "100%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(48,48,48)",
    borderRadius: "10px",
  });

  const TextContainer = styled("div")({
    color: "#dddddd",
    display: "block",
    fontSize: "1.2em",
    marginTop: "0.25em",
    marginBottom: "0.83em",
    marginLeft: 0,
    marginRight: 0,
    fontWeight: "bold",
  });

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      color: "#dddddd",
      background: "rgb(48,48,48)",
      border: "0px solid #000",
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleBrush = () => {
    setBrushing(!brushing);
    setAggregate(false);
  };

  const toggleAgg = () => {
    setAggregate(!aggregate);
    setBrushing(false);
  };

  const [localRadius, setLocalRadius] = React.useState(100);

  const handleBrushRadius = (event, newValue) => {
    console.log(newValue);
    setLocalRadius(newValue);
    setBrushRadius(newValue);
  };

  return (
    <div>
      <PositionContainer>
        <CenterContainer>
          {/* <TextContainer>Percent of trips during this time</TextContainer>
          <TextContainer>{printCount}%</TextContainer> */}
          <div>
            <Button
              variant="contained"
              disableElevation
              onClick={toggleBrush}
              color="primary"
            >
              Toggle brushing
            </Button>
            {brushing ? (
              <div>
                <div>Brushing Arc Target</div>
                <ButtonGroup>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => setArcType("source")}
                    color={arcType == "source" ? "" : "primary"}
                  >
                    Pickups
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => setArcType("target")}
                    color={arcType == "target" ? "" : "primary"}
                  >
                    Dropoffs
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => setArcType("source_target")}
                    color={arcType == "source_target" ? "" : "primary"}
                  >
                    Both
                  </Button>
                </ButtonGroup>

                <div>Brush Radius</div>
                <Slider
                  value={localRadius}
                  onChange={handleBrushRadius}
                  step={10}
                  min={50}
                  max={400}
                  valueLabelDisplay="auto"
                  aria-labelledby="continuous-slider"
                />
              </div>
            ) : (
              <div />
            )}

            <Button
              variant="contained"
              disableElevation
              onClick={toggleAgg}
              color="primary"
            >
              Toggle aggregation
            </Button>
            {aggregate ? (
              <div>
                Aggregate by Event:
                <ButtonGroup>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => setPickupAgg(true)}
                    color={pickupAgg ? "" : "primary"}
                  >
                    Pickup
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => setPickupAgg(false)}
                    color={pickupAgg ? "primary" : ""}
                  >
                    Dropoff
                  </Button>
                </ButtonGroup>
              </div>
            ) : (
              <div />
            )}

            <Button
              variant="contained"
              disableElevation
              onClick={resetFilter}
              color="primary"
            >
              Reset Time Filter
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={resetView}
              color="primary"
            >
              Reset View
            </Button>
            <IconButton
              variant="contained"
              disableElevation
              onClick={handleOpen}
              color="secondary"
            >
              <IconHelp />
            </IconButton>
          </div>
        </CenterContainer>
      </PositionContainer>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Help:</h2>
              <ul>
                <li>
                  The map displays where New Yrok City Taxis picked up and
                  dropped off passengers during the first few months of the
                  COVID pandemic.
                </li>
                <li>
                  Green Represents a pickup location and red means a dropoff
                  location.
                </li>
                <p></p>
                <li>
                  Enabling brushing allows for the specific trips to be
                  highlighted.
                </li>
                <li>
                  The brushing can filter the trips with pickups, dropoffs, or
                  both inside the radius.
                </li>
                <li>The radius of the brush can be changed via the slider.</li>
                <p></p>
                <li>
                  An aggregate view of the data can be enabled to show
                  aggregation of where pickup and dropoff locations are.
                </li>
                <p></p>
                <li>
                  The time filter can be adjusted to view how trip locations
                  change over time.
                </li>
                <li>The lock icon toggles the fixed/free filter size.</li>
                <li>The filter can be reset with the "Reset Filter" button.</li>
                <p></p>
                <li>
                  The view of the map can be reset to the initial using the
                  "Reset View" button
                </li>
              </ul>
              <p>
                Data courtesy of NYC TLS:
                https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
