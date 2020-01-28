import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries
} from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";



const generateData = (start, end, step) => {
  const data = [{
    value: 1.12312,
    argument: 1
  },
  {
    value: 1.432232,
    argument: 2
  },
  {
    value: 2.45433,
    argument: 3
  },{
    value: 1.12312,
    argument: 4
  },
  {
    value: 1.432232,
    argument: 5
  },
  {
    value: 2.45433,
    argument: 6
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
      data: generateData(2, 12, 0.25)
    };
  }
  render() {
    const { data } = this.state;

    return (
      <Chart data={data} width={650} height={500}>
        <ArgumentAxis showGrid />
        <ValueAxis />

        <SplineSeries name="sin" valueField="value" argumentField="argument" />
      </Chart>
    );
  }
}
