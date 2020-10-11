import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";

class SelectMachine extends React.Component {
  state = { machine: "" };
  handleChange = (event) => {
    this.setState(({ machine }) => {
      return {
        machine: event.target.value
      };
    });
    //console.log(this.state.machine);
    this.props.onSelectMachine(event.target.value);
  };

  render() {
    return (
      <FormControl>
        <InputLabel shrink id="simple-select-label">
          Machine
        </InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={this.state.machine}
          onChange={this.handleChange}
        >
          <MenuItem value={"MC101"}>macchina 101</MenuItem>
          <MenuItem value={"MC102"}>macchina 102</MenuItem>
          <MenuItem value={"MC109"}>macchina 109</MenuItem>
        </Select>
      </FormControl>
    );
  }
}
export default SelectMachine;
