const convertToCelsius = function(temp) {
  temp = (temp - 32) * (5/9);
  if (temp % 1 === 0) return temp;
  else return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  temp = (9/5) * temp + 32;
  if (temp % 1 === 0) return temp;
  else return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
