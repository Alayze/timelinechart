import React from "react";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SelectMachine from "./SelectMachine.js";

class AddDataDialog extends React.Component {
  state = {
    open: false,
    machine: ""
  };

  handleClickOpen = () => {
    this.setState(({ open }) => {
      return {
        open: true
      };
    });
  };

  handleClose = () => {
    this.setState(({ open }) => {
      return {
        open: false
      };
    });
    this.props.addData({
      machine: this.state.machine
    });
  };
  handleSubmit = () => {};
  onSelectMachine = (value) => {
    this.setState(({ machine }) => {
      return {
        machine: value
      };
    });
  };
  render() {
    return (
      <form>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Aggiungere dati
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">Inserimento dati</DialogTitle>
          <DialogContent>
            <SelectMachine
              onSelectMachine={this.onSelectMachine}
            ></SelectMachine>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Annulla
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }
}
export default AddDataDialog;
