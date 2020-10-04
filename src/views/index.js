import React, { useEffect, useState } from 'react';
import { Chart } from '../components/chart';
import { ChartNavigation } from '../components/chartNavigation'
import { Header } from '../components/header';
import { OptimalAverage } from '../components/optimalAverage';
import "./index.css"

export const Index = (props) => {
  const [chartData, setChartData] = useState([]);
  const [dataInterval, setDataInterval] = useState(0);

  // TODO: Refactor the timing on data fetch and how data is passed here.
  // We should have the correct data upfront and not rely on useEffect to listen
  useEffect(() => {
    const data = props && props.data ? props.data.samples : [];

    // data.length && console.log('fullData: ', data);
    setChartData(data);
  }, [props]);
  
  // There had ought to be a simpler way to produce a flat array of values
  const sampleArray = [];
  chartData.map((element) => {
    sampleArray.push(element.values.power);
  });

  const findMaxAverage = (numbersArray, k) => {
    let start = 0;
    let end = numbersArray.length;
    
    if (!numbersArray) {
      return; 
    } else if (numbersArray.length === 1) {
      return {
        start,
        end,
        finalMaxSumSubArray: numbersArray[0]
      };
    }
    
    let currentMax = 0;
    let safeK = Math.min(k, numbersArray.length);
    for (var i = 0; i < safeK; i++) {
      currentMax += numbersArray[i] || 0;
    }

    let maxSoFar = currentMax;
    for (var j = k; j < numbersArray.length; j++) {
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

  const chartSliceData = findMaxAverage(sampleArray, dataInterval);
  const focusedChartData = chartData.slice(chartSliceData.start, chartSliceData.end + 1);
  const maxAverage = chartSliceData.maxAverage;
  // console.log('focusedChartData: ', focusedChartData);
  return (
    <div className="index-container">
      <Header />
      <Chart data={focusedChartData} />
      <OptimalAverage type={'Power'} value={maxAverage} />
      <ChartNavigation changeHandler={setDataInterval}/>
      <p>
        ------------- README -------------
      </p>
      <div className="readme">
        <p>
          Your application should be well structured and demonstrate what you consider production quality, readable,
          maintainable, and testable software.
        </p>

        <p> 
        ## Best Practices
        - This program was purposely written without best practices in mind
        - Rewrite and refactor to use best practices, data structures, functional or OO patterns
        - Refactor to display additional channels such as heart rate and speed
        </p>
      </div>
    </div>
  );
}