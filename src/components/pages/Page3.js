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

export default function Page3({}) {
  return (
    <div>
      <div>
        <div>
          Aggregation of individual trips into bins provides a summary view of
          the trips taken in the city.
        </div>
        <br></br>
        <div>
          These bins can aggregate over pickups or dropoffs in the area.
        </div>
        <br></br>
        <h4>Guided Exploration</h4>
        <div>How do popular pickup and dropoff locations change with time?</div>
        <br></br>
        <div>
          When do people usually depart from LaGuardia Airport (LGA)? When do
          they arrive?
        </div>
      </div>
    </div>
  );
}
