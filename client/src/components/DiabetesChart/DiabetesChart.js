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
import { EventTracker } from '@devexpress/dx-react-chart';
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";

export default class DiabetesChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: props.generateData(30, 200, 1)
    };
    
  }
  
  render() {
    const data = this.props.generateData(50, 200, 1);
    // console.log("data", data);
    const splinePoint = { size: 10 };
    
    return (
      <div>
      <Chart data={data} width={"auto"} height={600} >
        <ArgumentAxis showGrid />
        <ValueAxis showLabels="false"/>
        <SplineSeries name="mg/dl" valueField="value" argumentField="date" />
        <SplineSeries name="High" valueField="high" argumentField="date" />
        <SplineSeries name="Low" valueField="low" argumentField="date" />
        <ScatterSeries name="Time" valueField="value" argumentField="date" color="black" point={splinePoint} />

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
