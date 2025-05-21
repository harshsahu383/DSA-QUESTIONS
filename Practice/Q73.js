// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

var setZeroes = function (matrix) {
  let zeroInFirstCol = false;
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] == 0) zeroInFirstCol = true;
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] == 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (let row = matrix.length - 1; row >= 0; row--) {
    for (let col = matrix[0].length - 1; col >= 1; col--) {
      if (matrix[row][0] == 0 || matrix[0][col] == 0) {
        matrix[row][col] = 0;
      }
    }
    if (zeroInFirstCol) {
      matrix[row][0] = 0;
    }
  }
};