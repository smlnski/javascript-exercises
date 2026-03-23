const convertToCelsius = function (temp) {

  const convertedTemp = (temp - 32) / 1.8;
  return roundToOneDecimal(convertedTemp);
};

const convertToFahrenheit = function (temp) {

  const convertedTemp = temp * 1.8 + 32;
  return roundToOneDecimal(convertedTemp);
};

function roundToOneDecimal(value) {
  return Math.round(value * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
