const repeatString = function(base, repeats) {
  if (repeats < 0) {
    return "ERROR";
  }
  if (base.length == 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < repeats; ++i) {
    result += base;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
