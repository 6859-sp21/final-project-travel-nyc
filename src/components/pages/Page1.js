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

export default function Page1({}) {
  return (
    <div>
      <h3>Time Filter</h3>
      <div>
        Certain locations are popular at certain times of the day. To filter
        based on when a trip was taken, use the filter at the bottom of the map.
      </div>
      <br></br>
      <div>
        The size of the filter can be made adjustable by using the lock icon to
        analyze larger periods of time
      </div>
      <br></br>
      <div>
        To view how trips change over time, the play/pause icon can
        automatically increment the filter window.
      </div>
      <h4>Performance note</h4>
      <div>
        It is recommended that the filter size is less than 6 hours when using
        the autoplay function.
      </div>

    </div>
  );
}
