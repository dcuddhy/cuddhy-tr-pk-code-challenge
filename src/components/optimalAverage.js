import React from 'react';
import "./optimalAverage.css"

export const OptimalAverage = (props) => {
  const valueType = props.type;
  const value = props.value && props.value.toLocaleString('en', { maximumFractionDigits: 0 });
  
  return (
    <div className="optimal-average">
    {value > 0 && `Optimal ${valueType} Metric Average: ${value}`}
  </div>
  );
}