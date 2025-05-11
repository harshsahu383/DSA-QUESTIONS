// You are given two arrays nums1 and nums2 consisting of positive integers.

// You have to replace all the 0's in both arrays with strictly positive integers such that the sum of elements of both arrays becomes equal.

// Return the minimum equal sum you can obtain, or -1 if it is impossible.
function calc(nums1,nums2){
    let i = 0;
    let count1 = 0;
    let count2 =0;
    while (i < Math.max(nums1.length,nums2.length)){
      if (nums1[i] == 0) {
        nums1[i] = 1;
        count1++;
      } 
       if (nums2[i] == 0) {
        nums2[i] = 1;
        count2++;
      } 
      i++;
    
    }
    let first = nums1.reduce((acc, crr) => acc + crr, 0);
    let second = nums2.reduce((acc, crr) => acc + crr, 0)
    if((count1===0 && second>first) || (count2===0 && first>second)){
        return -1;


}
return Math.max(first,second)}

let num1 = [1,2,5,0,1,0];
let num2 = [1,2,0];
console.log(calc(num1,num2))