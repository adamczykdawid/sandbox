//coding challange jonas
const printForecast = (arr) => {
  let strForecast = "";

  for (let i = 0; i < arr.length; i++) {
    strForecast += `...${arr[i]}\u00B0C in ${i + 1} days`;
  }
  return strForecast;
};
