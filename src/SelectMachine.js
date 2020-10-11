import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";

export default function SelectMachine() {
  const [machine, setMachine] = React.useState("");
  const handleChange = (event) => {
    setMachine(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel shrink id="demo-simple-select-label">
        Machine
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={machine}
        onChange={handleChange}
      >
        <MenuItem value={"MC101"}>macchina 101</MenuItem>
        <MenuItem value={"MC102"}>macchina 102</MenuItem>
        <MenuItem value={"MC109"}>macchina 109</MenuItem>
      </Select>
    </FormControl>
  );
}
