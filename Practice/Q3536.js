// // Q3536 leetcode contest
// You are given a positive integer n.
// Return the maximum product of any two digits in n.
// Note: You may use the same digit twice if it appears more than once in n.
// Example 1:
// Input: n = 31
// Output: 3
// Explanation:
// The digits of n are [3, 1].
// The possible products of any two digits are: 3 * 1 = 3.
// The maximum product is 3.
let n = 12
function num(n){
  let arr = [],
    max = 0;
  while (n > 0) {
    arr.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let currentMax = arr[i] * arr[i + 1];
    max = Math.max(currentMax, max);
  }
  return max;
}
console.log(num(n));