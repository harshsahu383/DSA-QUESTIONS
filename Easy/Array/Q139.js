// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space
// we can do it with xor operator to solve this problem very easily and efficiently
function singleNum(nums){
    for (let i = 0; i < nums.length; i++) {
      let result = 0;
      for (num of nums) {
        result ^= num;
      }
      return result;
    }
}
let nums = [0,1,2,1,1,3,5];
console.log(singleNum(nums));