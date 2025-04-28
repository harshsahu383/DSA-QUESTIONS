// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// leetcode q no two sum
function twoSum (nums,target){
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i] + nums[j] ==target){
                return [i,j];
            }
        }
    }
    return [];
}
let arr = [2,7,8];
let target = 9;
console.log(twoSum(arr,target));