// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

var findWordsContaining = function (words, x) {
  let result = [];
  let i = 0;
  while (i < words.length) {
    if (words[i].includes(x)) {
      result.push(i);
    }
    i++;
  }
  return result;
};