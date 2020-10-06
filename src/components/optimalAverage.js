import React from 'react';
import { camelCaseToSpaceCase } from "./Helpers"
import "./OptimalAverage.css"

export const OptimalAverage = (props) => {
  const valueType = camelCaseToSpaceCase(props.type);
  const value = props.value && props.value.toLocaleString('en', { maximumFractionDigits: 0 });

  return (
    <div className="optimal-average">
      {value > 0 && `Optimal ${valueType} Metric Average: ${value}`}
    </div>
  );
}