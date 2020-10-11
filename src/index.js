import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Chart from "./chart.js";

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Chart></Chart>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
