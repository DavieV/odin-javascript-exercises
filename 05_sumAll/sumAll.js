const sumAll = function(begin, end) {
  if (typeof begin != "number" || typeof end != "number" || begin < 0 ||
      end < 0) {
    return "ERROR";
  }
  let sum = 0;
  for (let i = Math.min(begin, end); i <= Math.max(begin, end); ++i) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
