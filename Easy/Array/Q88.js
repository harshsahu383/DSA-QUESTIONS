// Q88 in leetcode merge arrays 
// We can do it with the three pointer approach as well as modern solution for it i write both but first three pointer approach
// three pointer approach 
let nums1 = [1,2,3,0,0,0];
let m  = 3;// real values present in nums1
let nums2 = [2,4,5];
let n = nums2.length;
function mergeArrays(nums1,m,nums2,n){
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
    return nums1

};
console.log(mergeArrays(nums1,m,nums2,n));
// this is also an optimal approach
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    for(let j = 0; j<nums2.length;j++){
        nums1.push(nums2[j]);
    }
    nums1.sort((a,b) => a -b);
}
//