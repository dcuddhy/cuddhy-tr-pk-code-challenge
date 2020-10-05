import React from 'react';

export const MetricSelection = (props) => {
  const onMetricChange = (e) => {
    props.changeHandler(e.target.value)
    props.navigationHandler(0);
  }

  return (
    <>
    <h4 className="chart-navigation">
      Select Your Focus:
    </h4>
      <div>
        <select name="pets" id="pet-select" onChange={onMetricChange}>
          <option value="power">Power</option>
          <option value="speed">Speed</option>
          <option value="heartRate">Heart Rate</option>
        </select>
      </div>
    
    </>
  );
}