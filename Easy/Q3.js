// // Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// Q no 35 in leetcode
// I AM DOING IT WITH LINEAR APPROACH FIRST IT  IS ACCEPTED BY LEET CODE
let arr = [1,3,5,6];
let target = 2;
function searchInsertPosition(arr,target){
    let i = 0;
    while(i<arr.length){
        if(arr[i]>=target){
            return i;
        }
        else{
            i++;
        }
    }
    return arr.length;
}
console.log(searchInsertPosition(arr,target));