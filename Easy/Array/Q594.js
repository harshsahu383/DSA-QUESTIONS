// 594 Longest Harmonious Subsequence
// // We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// // Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

 

// // Example 1:

// // Input: nums = [1,3,2,2,5,2,3,7]

// // Output: 5

// // Explanation:

// // The longest harmonious subsequence is [3,2,2,2,3].

var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    let j = 0, maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - nums[j] > 1) {
            j++;
        }
        if (nums[i] - nums[j] === 1) {
            maxLength = Math.max(maxLength, i - j + 1);
        }
    }
    return maxLength;
};