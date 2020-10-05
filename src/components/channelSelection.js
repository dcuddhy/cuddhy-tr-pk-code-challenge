import React from 'react';
  
  const convertToSpaceCase = (string) => {
    var result = string.replace( /([A-Z])/g, " $1" );
    var capitalizeResult = result.charAt(0).toUpperCase() + result.slice(1);
    return capitalizeResult;
  }

export const ChannelSelection = (props) => {
  const onChannelChange = (e) => {
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
          {props.channels.map(channel => 
            <option key={`${channel}`} value={`${channel}`} >{convertToSpaceCase(channel)}</option>

          )}
        </select>
      </div>
    
    </>
  );
}