// Container with most water
// leet code q11

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function maxWater (arr) {
    let maxwater = 0;
for(let i = 0; i<height.length-1;i++){
    for(let j = i+1;j<height.length;j++){
        let width = j - i ;
        let ht = Math.min(height[i], height[j]);
        let currentWater = width * ht;
        maxwater = Math.max(maxwater,currentWater);
    }
}
return maxwater;
}
console.log(maxWater(height));
// Two pointer approach for this question with optimal solutions

let heighT = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function maxWateR (heighT){
    let maxwater = 0,left = 0,right=heighT.length-1;
    while(left<right){
    let width = right - left;
    let ht = Math.min(heighT[left],heighT[right]);
    let currentWater = width * ht;
    maxwater = Math.max(maxwater,currentWater);
    heighT[left]<heighT[right] ? left++ : right--;
    }
    return maxwater;
} 
console.log(maxWateR(height))