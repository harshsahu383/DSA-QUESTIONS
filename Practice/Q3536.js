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
let n = 437
function num(n){
  let arr = [],
    max = 0;
  while (n > 0) {
    arr.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  arr.sort((a,b)=> a-b);
  max = arr[arr.length-1] * arr[arr.length-2];
  return max;
}
console.log(num(n));
// this solution is run on 1ms time we have 0 ms time or optimal solution
// 0ms runtime //
function digit(n){
     let max1 = 0;
    let max2 = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit > max1) {
            max2 = max1;
            max1 = digit;
        } else if (digit > max2) {
            max2 = digit;
        }
        n = Math.floor(n / 10)
    }
    return max1 * max2;
}