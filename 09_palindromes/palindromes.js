const palindromes = function (s) {
  letters = s.replace(/[\.,!\' ]+/g, '').toLowerCase().split('');
  for (let i = 0; i < Math.floor(letters.length / 2); ++i) {
    if (letters[i] !== letters[letters.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
