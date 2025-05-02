//Linear search algoritm also called sequential search algorithm
// best for unsorted arrays and small arrays
//Search all the elements starts from 0 to n - 1 array length
// 1. Start from the beginning of the array (index = 0)

// 2. Repeat the following until the end of the array:
//     a. Check if arr[index] is equal to target
//         - If yes, return index (you found the target)
//     b. If not, move to the next index

// 3. If you reach the end and didn't find it:
//     - Return -1 (target is not in the array)
let arr = [0, 1, 2, 5, 6, 9, 0, 4];
let val = 4;

function linearSearchAlgo(arr, val) {
  let i = 0;
  while (i <= arr.length - 1) {
    if (arr[i] == val) return i;
    else i++;
  }
  return -1;
}
console.log(linearSearchAlgo(arr,val));
