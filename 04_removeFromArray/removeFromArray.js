const removeFromArray = function(arr, ...args) {
  const remove = new Set(args);
  let ret = [];
  arr.forEach(function(v) {
    if (!remove.has(v)) {
      ret.push(v);
    }
  })
  return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
