import React from 'react';
import styled from "styled-components";
import { camelCaseToSpaceCase } from "./Helpers";

const MessageContainer = styled.div`
  height: 1rem;
`;

export const OptimalAverage = (props) => {
  const valueType = camelCaseToSpaceCase(props.type);
  const value = props.value && props.value.toLocaleString('en', { maximumFractionDigits: 0 });

  return (
    <MessageContainer className="optimal-average">
      {value > 0 && `Optimal ${valueType} Metric Average: ${value}`}
    </MessageContainer>
  );
}