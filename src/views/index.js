import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Chart } from '../components/chart';
import "./index.css"

export const Index = (props) => {
  const [chartData, setChartData] = useState([]);
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
    let end = 0;
    
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
      finalMaxSumSubArray: maxSoFar
    };
  }



// TODO: good for reference but will need to clean up
// *** 20 minutes = 1,200,000 ms
// *** 15 minutes = 900,000 ms
// *** 10 minutes = 600,000 ms
// *** 5 minutes = 300,000 ms
// *** 1 minutes = 60,000 ms
// console.log('******************', findMaxAverage(sampleArray, 60));

// const chartSliceData = findMaxAverage(sampleArray, 1200);
const chartSliceData = findMaxAverage(sampleArray, 4000);
// console.log('****************** chartData: ', chartData);
// console.log('****************** chartData start: ', chartSliceData.start);
// console.log('****************** chartData end: ', chartSliceData.start);

  const focusedChartData = chartData.slice(chartSliceData.start, chartSliceData.end + 1);
  // console.log('focusedChartData: ', focusedChartData);

  return (
    <div className="index-container">
      <Header />
      <Chart data={focusedChartData} />
      <p>
        -------------
        README
        -------------
      </p>
      <div className="readme">
        <p>
          Your task is to write a small single page application that loads the data from
          `workout-data.json`, runs calculations, and displays a chart, and calculation results. Your
          application should be well structured and demonstrate what you consider production quality, readable,
          maintainable, and testable software.
        </p>

        <p>
          ## Algorithm
          - Write a method that finds the best 20 minute power effort, where "best" is defined as
              highest continuous average for the given time period
          - Make your algorithm as efficient as possible
          - Use your method to calculate the 1, 5, 10, 15, and 20 minute best efforts
          *** 20 minutes = 1,200,000 ms
          *** 15 minutes = 900,000 ms
          *** 10 minutes = 600,000 ms
          *** 10 minutes = 300,000 ms
          *** 1 minutes = 1,000 ms
        </p>  

        <p>
          ## User Interface Functionality
          - Display the power output over time on a chart, using time as the X axis
          - Display the 1, 5, 10, 15, and 20 minute best effort values
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