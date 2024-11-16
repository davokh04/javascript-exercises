const convertToCelsius = function(temp) {
  const tempConverted = (temp - 32) * (5 / 9);
  return Number.parseFloat(tempConverted.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const tempConverted = (temp * (9 / 5) + 32);
  return Number.parseFloat(tempConverted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
