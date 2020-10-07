import React from 'react';
import styled from 'styled-components';
import { camelCaseToSpaceCase } from './Helpers';

interface MessageProps {
  type: string;
  value?: number;
}

const MessageContainer = styled.div`
  height: 1rem;
`;

export const OptimalAverage = (props: MessageProps) => {
  const valueType = camelCaseToSpaceCase(props.type);
  const value = props.value?.toLocaleString('en', { maximumFractionDigits: 0 });

  return (
    <MessageContainer className="optimal-average">
      {props.value ? `Optimal ${valueType} Metric Average: ${value}` : 'Total Session Overview'}
    </MessageContainer>
  );
}
  // optional chaining may work with babel
  // https://github.com/kulshekhar/ts-jest/issues/1283
  // "@babel/plugin-proposal-optional-chaining": "^7.6.0",
