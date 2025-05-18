// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
var containsNearbyDuplicate = function (nums, k) {
  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
    if (seen.size > k) {
      seen.delete(nums[i - k]);
      
    }
  }
  return false;
};