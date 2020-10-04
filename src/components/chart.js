import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip,  } from "recharts"
import "./chart.css"

const prettyTime = (milliseconds) => {
  var minutes = Math.floor(milliseconds / 60000);
  var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export const Chart = (props) => {
  // console.log('props.data: ', props.data);
  const chartData = props.data;
  const values = [];

  chartData.map(item => {
    values.push({
      "name": prettyTime(item.millisecondOffset),
      "power": item.values.power,
    });
  });

  // console.log('values: ', values);

  return (
    <>
      <h3 className="header">
        Optimal Power Training
      </h3>
      <div className="chart-container">
        <AreaChart width={730} height={250} data={values}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="power" stroke="#8884d8" fillOpacity={1} fill="url(#colorPower)" />
        </AreaChart>
      </div>
    </>
  );
}