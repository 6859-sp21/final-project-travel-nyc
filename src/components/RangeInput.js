import React, { useState, useEffect } from "react";
import { styled, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/IconButton";
import Lock from "@material-ui/icons/Lock";
import LockOpen from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

const PositionContainer = styled("div")({
  position: "absolute",
  left: "20vw",
  zIndex: 1,
  bottom: "40px",
  width: "80vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CenterContainer = styled("div")({
  position: "",
  zIndex: 1,
  // bottom: "40px",
  height: "120%",
  width: "65%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgb(48,48,48)",
  borderRadius: "10px",
});

const SliderInput = withStyles({
  root: {
    marginLeft: 12,
    width: "80%",
  },
  valueLabel: {
    "& span": {
      background: "rgb(75,75,75)",
      color: "#ffffff",
    },
  },
})(Slider);

export default function RangeInput({
  min,
  max,
  value,
  animationSpeed,
  onChange,
  formatLabel,
}) {
  const [lock, setLock] = useState(true);
  const [span, setSpan] = useState(value[1] - value[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animation] = useState({});

  // prettier-ignore
  useEffect(() => {
    return () => animation.id && cancelAnimationFrame(animation.id);
  }, [animation]);

  if (isPlaying && !animation.id) {
    const span = value[1] - value[0];
    let nextValueMin = value[0] + animationSpeed;
    if (nextValueMin + span >= max) {
      nextValueMin = min;
    }
    animation.id = requestAnimationFrame(() => {
      animation.id = 0;
      onChange([nextValueMin, nextValueMin + span]);
    });
  }

  const isButtonEnabled = value[0] > min || value[1] < max;

  useEffect(() => {
    setSpan(value[1] - value[0]);
  }, [value]);

  const localOnChange = (newValue) => {
    let updateValue = [value[0], value[1]];
    if (lock) {
      if (newValue[1] === updateValue[1]) {
        updateValue = [newValue[0], newValue[0] + span];
      } else {
        updateValue = [newValue[1] - span, newValue[1]];
      }
      if (updateValue[0] < min) {
        updateValue = [min, min + span];
      }
      if (updateValue[1] > max) {
        updateValue = [max - span, max];
      }
      onChange(updateValue);
    } else {
      onChange(newValue);
    }
  };

  return (
    <PositionContainer>
      <CenterContainer>
        <Button
          color="secondary"
          disabled={!isButtonEnabled}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <PauseIcon title="Stop" />
          ) : (
            <PlayIcon title="Animate" />
          )}
        </Button>

        <SliderInput
          color="secondary"
          min={min}
          max={max}
          value={value}
          aria-labelledby="time-filter"
          onChange={(event, newValue) => localOnChange(newValue)}
          valueLabelDisplay="on"
          valueLabelFormat={formatLabel}
        />

        <Button
          color="secondary"
          onClick={() => {
            setLock(!lock);
            setSpan(value[1] - value[0]);
          }}
        >
          {lock ? (
            <Lock title="Lock Time Filter" />
          ) : (
            <LockOpen title="Open Time Filter" />
          )}
        </Button>
      </CenterContainer>
    </PositionContainer>
  );
}
