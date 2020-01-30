import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Legend,
  Title,
  ZoomAndPan
} from "@devexpress/dx-react-chart-bootstrap4";
import { Animation } from '@devexpress/dx-react-chart';
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";


const generateData = (start, end, step) => {
  const data = [{
    "value": 85.12312,
    "high" : 130,
    "low" : 80,
    "date": 1
  },
  {
    "value": 100.43,
    "high" : 130,
    "low" : 80,
    "date": 2
  },
  {
    "value": 150.45433,
    "high" : 130,
    "low" : 80,
    "date": 3
  },{
    "value": 40.12312,
    "high" : 130,
    "low" : 80,
    "date": 4
  },
  {
    "value": 110.432232,
    "date": 5
  },
  {
    "value": 100.45433,
    "high" : 130,
    "low" : 80,
    "date": 6
  },
  {
    "value": 80.45433,
    "high" : 130,
    "low" : 80,
    "date": 7
  }];
  // for (let i = start; i < end; i += step) {
  //   data.push({ value: Math.sin(i) / i, argument: i });
  // }
  console.log("data", data);
  
  return data;
};


export default class DiabetesChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: generateData(30, 200, 1)
    };
  }
  render() {
    const { data } = this.state;

    return (
      <Chart data={data} width={"auto"} height={600}>
        <ArgumentAxis showGrid />
        <ValueAxis showLabels="true"/>

        <SplineSeries name="mg/dl" valueField="value" argumentField="date" />
        <SplineSeries name="high" valueField="high" argumentField="date"/>
        <SplineSeries name="low" valueField="low" argumentField="date" />
        <Animation />
          <Legend />
          <ZoomAndPan />
          <Title text="My Glucose Chart" />
      </Chart>
    );
  }
}
