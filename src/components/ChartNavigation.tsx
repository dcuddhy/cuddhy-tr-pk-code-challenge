import React from 'react';
import styled from 'styled-components';

interface NavProps {
  changeHandler: (e) => void;
  channel: string;
}

const NavButton = styled.button`
  display: inline-flex;
  margin: 6px;
  padding: 6px;
  border-radius: 5px;
  outline: none;
`;

export const ChartNavigation = (props: NavProps) => {
  const onIntervalChange = (e) => {
    props.changeHandler(e.target.value)
  }

  return (
    <>
    <h4 className="chart-navigation">
      {`Select interval in minutes to find optimal ${props.channel} training sub-session:`}
    </h4>
      <div>
        <NavButton className="chart-nav-button" value={60} onClick={onIntervalChange}>1</ NavButton>
        <NavButton className="chart-nav-button" value={300} onClick={onIntervalChange}>5</ NavButton>
        <NavButton className="chart-nav-button" value={600} onClick={onIntervalChange}>10</ NavButton>
        <NavButton className="chart-nav-button" value={900} onClick={onIntervalChange}>15</ NavButton>
        <NavButton className="chart-nav-button" value={1200} onClick={onIntervalChange}>20</ NavButton>
        <NavButton className="chart-nav-button" value={0} onClick={onIntervalChange}>reset</ NavButton>
      </div>
    </>
  );
}