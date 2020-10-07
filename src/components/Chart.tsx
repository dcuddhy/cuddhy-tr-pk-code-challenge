import React from 'react';
import styled from 'styled-components';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { prettyTime } from './Helpers';
import { ChartProps } from '../Utilities';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
`;

export const Chart = (props: ChartProps) => {
  const chartData = props.data;
  const channel = props.channel;
  const values = chartData?.map(item => (
    {
      "name": prettyTime(item.millisecondOffset),
      [channel]: item.values[channel]
    }
  ))

  return (
    <ChartContainer className="chart-container">
      {values && values.length > 0 ? 
        <AreaChart width={730} height={250} data={values}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`color-${channel}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey={`${channel}`} stroke="#8884d8" fillOpacity={1} fill={`url(#color-${channel})`} />
        </AreaChart>
      : 
        <img alt="loading" src="./loading.gif" />
      }
    </ChartContainer>
  );
}