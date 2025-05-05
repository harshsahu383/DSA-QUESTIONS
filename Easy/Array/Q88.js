// Q88 in leetcode merge arrays
// We can do it with the three pointer approach as well as modern solution for it i write both but first three pointer approach
// three pointer approach
//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3; // real values present in nums1
let nums2 = [2, 4, 5];
let n = nums2.length;
function mergeArrays(nums1, m, nums2, n) {
  let i = m - 1; // Last index of real nums1 elements
  let j = n - 1; // Last index of nums2
  let k = m + n - 1; // Last index of nums1 (full size)

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  return nums1;
}
console.log(mergeArrays(nums1, m, nums2, n));
// this is also an optimal approach
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  for (let j = 0; j < nums2.length; j++) {
    nums1.push(nums2[j]);
  }
  nums1.sort((a, b) => a - b);
};
// this appraoch also accepted by the leet code
