const fibonacci = function(n) {
  if (typeof n == "string") {
    n = parseInt(n);
  }
  if (n <= 0) {
    return "OOPS";
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let prev2 = 1;
  let prev1 = 1;
  for (let i = 2; i < n; ++i) {
    let tmp = prev1 + prev2;
    prev2 = prev1;
    prev1 = tmp;
  }
  return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
