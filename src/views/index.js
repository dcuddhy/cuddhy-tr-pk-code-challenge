import React from 'react';
import { Header } from '../components/header';
import { Chart } from '../components/chart';
import "./index.css"

export const Index = () => {
  return (
    <div className="index">
      <Header />
      <Chart />
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