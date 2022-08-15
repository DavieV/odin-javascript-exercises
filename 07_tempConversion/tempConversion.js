const ftoc = function(tempF) {
  if (tempF == 32) {
    return 0;
  }
  return Number(((tempF - 32) / 1.8).toFixed(1));
};

const ctof = function(tempC) {
  return Number((tempC * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
