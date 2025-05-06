//Q118 the pascals traingle in the leet code 
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
var generate = function (numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [1];

    for (let j = 1; j < i; j++) {
      const val = triangle[i - 1][j - 1] + triangle[i - 1][j];
      row.push(val);
    }

    if (i > 0) row.push(1);

    triangle.push(row);
  }

  return triangle;
};