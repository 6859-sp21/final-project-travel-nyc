import React, { useState, useEffect } from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import IconHelp from "@material-ui/icons/Help";
import Slider from "@material-ui/core/Slider";
import LeftArrow from "@material-ui/icons/ArrowBackIos";
import RightArrow from "@material-ui/icons/ArrowForwardIos";
import { ThemeProvider } from "@material-ui/styles";
import { ButtonGroup } from "@material-ui/core";

import Page0 from "./pages/Page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

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
  const page_array = [<Page0 />, <Page1 />, <Page2 />, <Page3 />, <Page4 />];
  const max_page = page_array.length;
  const [printCount, setPrintCount] = useState(0);
  useEffect(() => {
    setPrintCount(((counts / 75960) * 100).toFixed(2));
  }, [counts]);

  const [page, setPage] = useState(0);

  const updatePage = (change) => {
    let newPage = page + change;
    if (newPage < 0) {
      newPage = 0;
    } else if (newPage >= max_page) {
      newPage = max_page - 1;
    }

    if (page === newPage) return;

    if (newPage === 2) {
      setBrushing(true);
      setAggregate(false);
    } else if (newPage === 3) {
      setBrushing(false);
      setAggregate(true);
    } else {
      setBrushing(false);
      setAggregate(false);
    }
    setPage(newPage);
  };

  const PositionContainer = styled("div")({
    position: "absolute",
    zIndex: 1,
    top: "1vh",
    left: "1vw",
    height: "90vh",
    width: "20vw",
  });

  const CenterContainer = styled("div")({
    color: "#dddddd",
    borderColor: "rgb(72,72,72)",
    padding: "1em",
    position: "",
    zIndex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    background: "rgb(48,48,48)",
    borderRadius: "10px",
  });

  const TextContainer = styled("div")({
    color: "#dddddd",
    display: "block",
    fontSize: "1.75em",
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
    setLocalRadius(newValue);
    setBrushRadius(newValue);
  };

  return (
    <div>
      <PositionContainer>
        <CenterContainer>
          <TextContainer>NYC COVID Taxi Trips</TextContainer>
          {/* Prev and next buttons */}
          <div>
            <ButtonGroup>
              <Button
                variant={page ? "contained" : "outlined"}
                disableElevation
                onClick={() => updatePage(-1)}
                color="primary"
                startIcon={<LeftArrow />}
              >
                Back
              </Button>
              <Button
                variant={page !== max_page - 1 ? "contained" : "outlined"}
                disableElevation
                onClick={() => updatePage(1)}
                color="primary"
                endIcon={<RightArrow />}
              >
                Next
              </Button>
            </ButtonGroup>
          </div>
          <div>
            {/* Brushing */}
            {page === max_page - 1 ? (
              <div>
                <h3>Free Exploration</h3>
                <div>Analysis Method</div>
                <br></br>
                <ButtonGroup>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={toggleBrush}
                    color={brushing ? "" : "primary"}
                  >
                    brushing
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={toggleAgg}
                    color={aggregate ? "" : "primary"}
                  >
                    aggregation
                  </Button>
                </ButtonGroup>
                <div></div>
                <br></br>
                <ButtonGroup>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={resetFilter}
                    color="primary"
                  >
                    Reset Time
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={resetView}
                    color="primary"
                  >
                    Reset View
                  </Button>
                </ButtonGroup>
                <IconButton
                  variant="contained"
                  disableElevation
                  onClick={handleOpen}
                  color="secondary"
                >
                  <IconHelp />
                </IconButton>
              </div>
            ) : (
              <div></div>
            )}

            {brushing ? (
              <div>
                <h3>Location Brushing</h3>
                <div>Brushing Arc Target</div>
                <br></br>
                <ButtonGroup size="small">
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
                <div></div>
                <br></br>
                <div>Brush Radius</div>
                <br></br>
                <ButtonGroup size="small">
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => handleBrushRadius(undefined, 100)}
                    color={brushRadius == 100 ? "" : "primary"}
                  >
                    Small
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => handleBrushRadius(undefined, 200)}
                    color={brushRadius == 200 ? "" : "primary"}
                  >
                    Medium
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => handleBrushRadius(undefined, 400)}
                    color={brushRadius == 400 ? "" : "primary"}
                  >
                    Large
                  </Button>
                </ButtonGroup>
                <br></br>
              </div>
            ) : (
              <div />
            )}
            {aggregate ? (
              <div>
                <h3>Location Aggregation</h3>
                <div>Aggregation Type</div>
                <br></br>
                <ButtonGroup size="small">
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
            <div>{page_array[page]}</div>
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
