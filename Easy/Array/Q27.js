// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
let arr = [3, 2, 2, 3];
let val = 3;
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length - 1,
    counter = 0;

  while (left < right) {
    if (nums[left] === val) nums[left] = "_";
    else counter++;

    if (nums[right] === val) nums[right] = "_";
    else counter++;
    left++;
    right--;
  }
console.log({counter,nums})
  return counter;
};

removeElement(arr, val);

function removeElement(arr, val) {
  let k = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == val) {
      arr = arr.map((item) => {
        if (item === 2) {
          return "_";
        } else {
          k++;
        }
      });
    }
  }
  return k, arr;
}
console.log(removeElement(arr, val));
// the both approaches is correct but leetcode did not accept that beacause they come under TLE 
// best solution is using two pointer approach
function removeElement(nums,val){
    let i=0;
    let n = nums.length
    while(i< n){
        if(nums[i] === val){
            nums[i] = nums[n-1]
            n--;
        }
        else{
            i++
        }
    }
    return n;
}
console.log(removeElement(arr,val));
// if you want to run please make sure pick one at a time beacuse they share same name functions