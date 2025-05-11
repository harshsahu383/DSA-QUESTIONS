// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
function findOdd3(arr){
 let i = 0;
 let result = false;
 while (i <= arr.length - 3) {
   if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
     result = true;
     break;
   }
   i++;
 }
 return result;
}