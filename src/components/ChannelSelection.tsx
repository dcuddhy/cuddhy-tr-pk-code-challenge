import React from 'react';
import { camelCaseToSpaceCase } from "./Helpers";

interface ChannelProps {
  changeHandler: (e) => void;
  channels: string[];
  navigationHandler: (number) => void;
}

export const ChannelSelection = (props: ChannelProps) => {
  const onChannelChange = (e) => {
    if (!e.target.value) {
      return;
    }

    props.changeHandler(e.target.value)
    props.navigationHandler(0);
  }

  return (
    <>
    <h4 className="chart-navigation">
      Select Your Focus:
    </h4>
      <div>
        <select name="channels" id="channel-selection-dropdown" onChange={onChannelChange}>
          <option key="option-blank" value="" >Select Option</option>
          {props.channels.map(channel => 
            <option key={`option-${channel}`} value={`${channel}`} >{camelCaseToSpaceCase(channel)}</option>
          )}
        </select>
      </div>
    </>
  );
}