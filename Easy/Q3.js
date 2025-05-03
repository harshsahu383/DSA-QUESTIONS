// // Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// Q no 35 in leetcode
// I AM DOING IT WITH LINEAR APPROACH FIRST IT  IS ACCEPTED BY LEET CODE
let arr = [1,3,5,6];
let target = 7;
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
// With Binary Search Algorithm
// both are accepted for leetcode
//this approach is being best but good enough
function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let = mid = Math.floor((left+right)/2)
        if(arr[mid] == target){
            return mid
        }
        else if(arr[mid]<target){
            left = mid+1;
        }
        else{
            right = mid -1;
        }
    }
    return left;
}
console.log(binarySearch(arr,target));