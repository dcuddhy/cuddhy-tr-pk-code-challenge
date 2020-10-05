import React from 'react';
  
const convertToSpaceCase = (string) => {
  const result = string.replace( /([A-Z])/g, " $1" );
  const capitalizeResult = result.charAt(0).toUpperCase() + result.slice(1);
  return capitalizeResult;
}

export const ChannelSelection = (props) => {
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
            <option key={`option-${channel}`} value={`${channel}`} >{convertToSpaceCase(channel)}</option>
          )}
        </select>
      </div>
    </>
  );
}