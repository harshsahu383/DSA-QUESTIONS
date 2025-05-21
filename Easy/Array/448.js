// // Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums
// Find All Numbers Disappeared In Array
var findDisappearedNumbers = function (nums) {
  let result = [];
  let n = 1;
  let max = nums.length;

  while (n <= max) {
    if (!nums.includes(n)) {
      result.push(n);
    }
    n++;
  }

  return result
};