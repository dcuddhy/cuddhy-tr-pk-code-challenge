import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { ChannelSelection } from '../components/ChannelSelection';
import { Chart } from '../components/Chart';
import { ChartNavigation } from '../components/ChartNavigation'
import { Header } from '../components/Header';
import { OptimalAverage } from '../components/OptimalAverage';
import { DataProps, InitialDataProps }  from '../Utilities';

interface Props {
  data?: InitialDataProps;
}

const IndexContainer = styled.div`
  margin: 32px;
  max-width: 80%;
  display: inline-flex;
  flex-direction: column;
`;

const findMaxAverage = (numbersArray, k) => {
  let start = 0;
  let end = numbersArray?.length;
  
  if (!numbersArray) {
    return {}; 
  } else if (numbersArray.length === 1) {
    return {
      start,
      end,
      finalMaxSumSubArray: numbersArray[0]
    };
  }
  
  let currentMax = 0;
  let safeK = Math.min(k, numbersArray.length);
  for (let i = 0; i < safeK; i++) {
    currentMax += numbersArray[i] || 0;
  }

  let maxSoFar = currentMax;
  for (let j = k; j < numbersArray.length; j++) {
    currentMax += ((numbersArray[j] || 0) - (numbersArray[j - k] || 0));

    if (currentMax > maxSoFar) {
      end = j;
      start = j - k + 1;
    }

    maxSoFar = Math.max(currentMax, maxSoFar);
  }

  return {
    start,
    end,
    maxAverage: maxSoFar / k
  };
}

export const Index = (props: Props) => {
  const [chartData, setChartData] = useState<DataProps[]>([]);
  const [dataInterval, setDataInterval] = useState(0);
  const [channelSet, setChannelSet] = useState<string[]>([]);
  const [channelType, setChannelType] = useState('power');

  useEffect(() => {
    const data = props.data ? props.data.samples : [];
    const channels = props.data ? props.data.channelSet : [];

    setChartData(data);
    setChannelSet(channels);
  }, [props]);
  
  const numbersArray = chartData.map((element) => element.values[channelType]);
  const chartSliceData = findMaxAverage(numbersArray, dataInterval);
  const focusedChartData = chartData.slice(chartSliceData.start, chartSliceData.end + 1);
  const maxAverage = chartSliceData.maxAverage;

  return (
    <IndexContainer className="index-container">
      <Header />
      <ChannelSelection changeHandler={setChannelType} navigationHandler={setDataInterval} channels={channelSet} />
      <Chart data={focusedChartData} channel={channelType} />
      <OptimalAverage type={channelType} value={maxAverage} />
      <ChartNavigation changeHandler={setDataInterval} channel={channelType} />
    </IndexContainer>
  );
}