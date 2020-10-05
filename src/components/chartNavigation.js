import React from 'react';
import "./chartNavigation.css"

export const ChartNavigation = (props) => {
  const onIntervalChange = (e) => {
    props.changeHandler(e.target.value)
  }

  return (
    <>
    <h4 className="chart-navigation">
      {`Select interval in minutes to find optimal ${props.channel} training sub-session:`}
    </h4>
      <div>
        <button className="chart-nav-button" value={60} onClick={onIntervalChange}>1</button>
        <button className="chart-nav-button" value={300} onClick={onIntervalChange}>5</button>
        <button className="chart-nav-button" value={600} onClick={onIntervalChange}>10</button>
        <button className="chart-nav-button" value={900} onClick={onIntervalChange}>15</button>
        <button className="chart-nav-button" value={1200} onClick={onIntervalChange}>20</button>
        <button className="chart-nav-button" value={0} onClick={onIntervalChange}>reset</button>
      </div>
    
    </>
  );
}