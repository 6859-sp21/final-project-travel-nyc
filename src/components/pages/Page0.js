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

export default function Page0({}) {
  return (
    <div>
      <h3>Introduction</h3>
      <div>
        This visualization explores where New Yorkers traveled via taxi during
        the initial months of the COVID-19 pandemic.
      </div>
      <br></br>
      <div>
        For each trip, a pickup location (green dot) and dropoff location (red
        dot) are marked on the map.
      </div>
      <br></br>
      <div>
        To pan and navigate the map, click and drag. Shift+click and drag to
        rotate the map view. Scroll to zoom in and out.
      </div>
      <h4>Guided Exploration</h4>
      <div>
        Take a look around on the map and see if you can spot where riders may
        like to be dropped off.
      </div>
    </div>
  );
}
