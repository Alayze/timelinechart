import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import moment from "moment";

am4core.useTheme(am4themes_animated);

var date1 = moment("2018-01-01 12:25:32", moment.ISO_8601);
var date2 = moment("2018-01-01 12:25:32", moment.ISO_8601).add(40, "hours");
class Chart extends React.Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    var colorSet = new am4core.ColorSet();

    chart.data = [
      {
        machine: "MC101",
        article: "D0TK103",
        tg: "50",
        count: 10,
        fromDate: date1.toDate(),
        toDate: date2.toDate(),
        totalhours: 40,
        color: colorSet.getIndex(0).brighten(0)
      },
      {
        machine: "MC102",
        fromDate: "2018-01-01 12:00",
        toDate: "2018-01-01 15:00",
        color: colorSet.getIndex(0).brighten(0.4)
      },
      {
        machine: "MC109",
        fromDate: "2018-01-01 15:30",
        toDate: "2018-01-01 21:30",
        color: colorSet.getIndex(0).brighten(0.8)
      },

      {
        machine: "MC104",
        fromDate: "2018-01-01 09:00",
        toDate: "2018-01-01 12:00",
        color: colorSet.getIndex(2).brighten(0)
      },
      {
        machine: "MC105",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 17:00",
        color: colorSet.getIndex(2).brighten(0.4)
      },

      {
        machine: "MC105",
        fromDate: "2018-01-01 11:00",
        toDate: "2018-01-01 16:00",
        color: colorSet.getIndex(4).brighten(0)
      },
      {
        machine: "MC105",
        fromDate: "2018-01-01 16:00",
        toDate: "2018-01-01 19:00",
        color: colorSet.getIndex(4).brighten(0.4)
      },

      {
        machine: "Melania",
        fromDate: "2018-01-01 16:00",
        toDate: "2018-01-01 20:00",
        color: colorSet.getIndex(6).brighten(0)
      },
      {
        machine: "Melania",
        fromDate: "2018-01-01 20:30",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(6).brighten(0.4)
      },

      {
        machine: "Donald",
        article: "797001",
        tg: "50",
        count: "10",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-02 24:00",
        color: colorSet.getIndex(8).brighten(0)
      }
    ];

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.baseInterval = { count: 1, timeUnit: "hour" };
    dateAxis.max = new Date(2018, 0, 10, 24, 0, 0, 0).getTime();
    dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "machine";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.columns.template.width = am4core.percent(80);
    series.columns.template.tooltipText =
      "{article} TG:{tg} {count} pz hours{totalhours}";

    series.dataFields.openDateX = "fromDate";
    series.dataFields.dateX = "toDate";
    series.dataFields.categoryY = "machine";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 1;

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;

    series.columns.template.events.on(
      "hit",
      function (ev) {
        console.log(ev.target.dataItem.categories.categoryY);
      },
      this
    );
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
  }
}

export default Chart;
