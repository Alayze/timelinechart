import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Chart from "./chart.js";
import AddDataDialog from "./addDataDialog.js";
var extdata = [
  {
    machine: "MC101",
    article: "D0TK103",
    tg: "50",
    count: 10,
    fromDate: "2018-01-01 12:00",
    toDate: "2018-01-01 14:00",
    totalhours: 40,
    color: "red"
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

  onAddData = (task) => {
    this.setState(({ data }) => {
      //console.log(data);
      const taskwrap = {
        machine: task.machine,
        fromDate: "2018-01-05 16:00",
        toDate: "2018-01-06 20:00"
      };
      console.log(task);
      const newArr = [...data, taskwrap];
      return {
        data: newArr
      };
    });
  };
  onCallModal = (item) => {
    console.log(item);
  };
  //
  render() {
    return (
      <div>
        <AddDataDialog
          addData={this.onAddData}
          variant="contained"
          color="primary"
        ></AddDataDialog>
        <Chart data={this.state.data} callModal={this.onCallModal}></Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
