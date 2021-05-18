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

export default function Page2({}) {
  return (
    <div>
      <div>Brushing is a method of analyzing specific regions on the map.</div>
      <br></br>
      <div>
        Hovering on the map will highlight the trips around that location. Arcs
        annotate the trip's pickup (green) and dropoff (red) locations.
      </div>
      <br></br>
      <div>
        The target of the brush indicates which trips are highlighted in the
        area: pickups, dropoffs, or both.
      </div>
      <h4>Guided Exploration</h4>
      <div>
        What are some popular destinations and where to people travel to get
        there?
      </div>
    </div>
  );
}
