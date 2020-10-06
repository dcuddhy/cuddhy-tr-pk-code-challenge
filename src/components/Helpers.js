export const camelCaseToSpaceCase = (string) => {
  const result = string.replace( /([A-Z])/g, " $1" );
  const capitalizeResult = result.charAt(0).toUpperCase() + result.slice(1);

  return capitalizeResult;
}

export const prettyTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}