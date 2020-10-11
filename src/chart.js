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
    //chart.dataSource.updateCurrentData = true;
    chart.paddingRight = 20;

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    var colorSet = new am4core.ColorSet();

    chart.data = this.props.data;

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
        this.props.callModal(ev.target.dataItem._dataContext);
      },
      this
    );
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  componentDidUpdate(oldProps) {
    this.chart.data = this.props.data;
  }
  render() {
    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
  }
}

export default Chart;
