import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { CircularProgress } from "@material-ui/core";
import Done from "@material-ui/icons/Done";

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

export default function WelcomeModal({ loading }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    if (loading) return;
    setOpen(false);
  };

  return (
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
            <h2 id="transition-modal-title">NYC Taxi Trips during COVID</h2>
            <p id="transition-modal-description">
              The COVID pandemic led to lockdowns and the reduction of travels.
            </p>
            <p>A city that was hit espectially hard was NYC.</p>
            <p>
              Let's explore how the first few months of the pandemic (March -
              June 2020) changed how people used taxis in NYC.
            </p>
            <p>
              Data courtesy of NYC TLS:
              https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page
            </p>

            {loading ? (
              <div>
                The data is loading, please wait. <CircularProgress />
              </div>
            ) : (
              <div>
                <p>
                  Loading complete. Click outside to continue <Done />
                </p>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
