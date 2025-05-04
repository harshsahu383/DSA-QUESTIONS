// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Qno 15 mediuem in leetcode array
//Notice that the solution set must not contain duplicate triplets.
// let arr = [-1,-5,0,-3]
// function threeSum(arr){
//     let i = 0,left = i + 1,right = arr.length-1;
//     let result = [];
//     arr.sort();
//     while(left<=right){
//         if(arr[i] + arr[left] + arr[right]==0){
//          result = result.shift(arr[i],arr[left],arr[right])
//             left++;
//             right--;
//         }
//         else if(arr[i] + arr[left]+ arr[right] < 0){
//             left++;  
//         }
//         else{
//             right--;
//         }
//     }
//     return result;
// }
// threeSum(arr);4
// sorting with two pointer is optimal approach for solving this
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let arr = [-1, 0, 1, 2, -1, -4];
var threeSum = function(nums) {
   nums.sort((a,b) => a -b);
   const result = [];
   for(let i = 0; i< nums.length-2;i++){
    if(i<0 && nums[i] === nums[i-1]) continue;
    let left = i + 1;
    let right = nums.length-1;
    while(left<right){
        const sum  = nums[i] + nums[left] + nums;[right];
        if(sum === 0){
            result.push(nusm[i],nums[left],nums[right])
            while(left<right && nums[left] === nums[left + 1]) left++;
            while(left<right && nums[right] === nums[right - 1]) right--;
            left++;
            right--;
        }
        else if(sum<0){
            left++;
        }
        else{
            right--
        }


   }
}
   return result;
};
console.log(threeSum(arr));