//Leetcode Problem no 66 Plus one in Array
//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
let arr = [9,9,9];
function plusOne (arr){
    let i;
    for(i = arr.length-1; i>=0;i--){
        if(arr[i] < 9){
        arr[i]+=1;
        return arr;
        }
        else if(arr[i] == 9){
            arr[i] = 0;
        }
    }
    arr.unshift(1);
    return arr;
}
console.log(plusOne(arr));
// this code is accepted by the leet Code and its the best approach to do it 
// this is an optimal solution with O(n)
//We also can do this with brute force but the time will exceed