// You are given an integer array nums of length n and a 2D array queries, where queries[i] = [li, ri].

// For each queries[i]:

// Select a subset of indices within the range [li, ri] in nums.
// Decrement the values at the selected indices by 1.
// A Zero Array is an array where all elements are equal to 0.

// Return true if it is possible to transform nums into a Zero Array after processing all the queries sequentially, otherwise return false.
function findZero(nums){
    const deltaArray = new Array(nums.length + 1).fill(0);
    for (const [left, right] of queries) {
      deltaArray[left] += 1;
      deltaArray[right + 1] -= 1;
    }
    const operationCounts = [];
    let currentOperations = 0;
    for (const delta of deltaArray) {
      currentOperations += delta;
      operationCounts.push(currentOperations);
    }
    for (let i = 0; i < nums.length; i++) {
      if (operationCounts[i] < nums[i]) {
        return false;
      }
    }
    return true
}