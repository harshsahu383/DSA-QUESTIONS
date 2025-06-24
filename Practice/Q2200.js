// // You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

// // Return a list of all k-distant indices sorted in increasing order.
// // 2200 Find All K-Distant Indices in an Array
// Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
// Output: [1,2,3,4,5,6]
// Explanation: Here, nums[2] == key and nums[5] == key.

var findKDistantIndices = function (nums, key, k) {
  const res = [];
  const n = nums.length;
  // traverse number pairs
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (nums[j] === key && Math.abs(i - j) <= k) {
        res.push(i);
        break; // early termination to prevent duplicate addition
      }
    }
  }
  return res;
};