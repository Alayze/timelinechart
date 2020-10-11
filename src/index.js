import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Chart from "./chart.js";
import AddDataField from "./addDataField.js";
var extdata = [
  {
    machine: "MC101",
    article: "D0TK103",
    tg: "50",
    count: 10,
    fromDate: "2018-01-01 12:00",
    toDate: "date2.toDate()",
    totalhours: 40
    //color: colorSet.getIndex(0).brighten(0)
  },
  {
    machine: "MC102",
    fromDate: "2018-01-01 12:00",
    toDate: "2018-01-01 15:00"
    //color: colorSet.getIndex(0).brighten(0.4)
  },
  {
    machine: "MC109",
    fromDate: "2018-01-01 15:30",
    toDate: "2018-01-01 21:30"
    //color: colorSet.getIndex(0).brighten(0.8)
  },

  {
    machine: "MC104",
    fromDate: "2018-01-01 09:00",
    toDate: "2018-01-01 12:00"
    //color: colorSet.getIndex(2).brighten(0)
  },
  {
    machine: "MC105",
    fromDate: "2018-01-01 13:00",
    toDate: "2018-01-01 17:00"
    //color: colorSet.getIndex(2).brighten(0.4)
  },

  {
    machine: "MC105",
    fromDate: "2018-01-01 11:00",
    toDate: "2018-01-01 16:00"
    //color: colorSet.getIndex(4).brighten(0)
  },
  {
    machine: "MC105",
    fromDate: "2018-01-01 16:00",
    toDate: "2018-01-01 19:00"
    //color: colorSet.getIndex(4).brighten(0.4)
  },

  {
    machine: "Melania",
    fromDate: "2018-01-01 16:00",
    toDate: "2018-01-01 20:00"
    //color: colorSet.getIndex(6).brighten(0)
  },
  {
    machine: "Melania",
    fromDate: "2018-01-01 20:30",
    toDate: "2018-01-01 24:00"
    //color: colorSet.getIndex(6).brighten(0.4)
  }
];

class App extends React.Component {
  state = { data: extdata };

  onAddData = () => {
    this.setState(({ data }) => {
      console.log(data);
      const task = {
        machine: "Melania",
        fromDate: "2018-01-05 16:00",
        toDate: "2018-01-06 20:00"
      };
      const newArr = [...data, task];
      return {
        data: newArr
      };
    });
  };
  //
  render() {
    return (
      <div>
        <AddDataField
          addData={this.onAddData}
          variant="contained"
          color="primary"
        ></AddDataField>
        <Chart data={this.state.data}></Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
