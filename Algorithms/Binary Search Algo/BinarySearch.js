// to perform binary search algorithms we need an sorted array first
// Binary searchj algorithm workin on a one pivot elemenet that checks all the others and find the user wants to be find
// To Perform its starts from 1 to n of the array
// binary search is a classic example of divide and rule approachlow
let  arr = [0,11,22,33,44,55,66,77,88,99,100];
let low = 0,high = arr.length - 1;
let mid,key=0;
while(low<=high){
    mid = Math.floor((low + high)/2);
    if(arr[mid]==key){
        return console.log("element is found ",mid,arr[mid]);
    }
    else if (key < arr[mid]){
        high = mid - 1;
    }
    else{
        low = mid + 1
    }
    if(low>high){
        console.log("element is not found");
    }
}
