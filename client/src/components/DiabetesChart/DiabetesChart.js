import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  ScatterSeries,
  Legend,
  Title,
  ZoomAndPan,
  Tooltip
} from "@devexpress/dx-react-chart-bootstrap4";
import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";

export default class DiabetesChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: props.generateData(30, 200, 1)
    };
    
  }

  render() {
    const data = this.props.generateData(30, 200, 1);
console.log("data", data);

    return (
      <div>
      <Chart data={data} width={"auto"} height={600} >
        <ArgumentAxis showGrid />
        <ValueAxis showLabels="true"/>
        <SplineSeries name="mg/dl" valueField="value" argumentField="date" />
        <SplineSeries name="high" valueField="high" argumentField="date" />
        <SplineSeries name="low" valueField="low" argumentField="date" />

        <Animation />
          <Legend />
          <ZoomAndPan />
          <Title text="My Glucose Chart" />
          <EventTracker />
        <Tooltip />
      </Chart>
      </div>
    );
  }
}
