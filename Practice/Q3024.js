
// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

// A triangle is called equilateral if it has all sides of equal length.
// A triangle is called isosceles if it has exactly two sides of equal length.
// A triangle is called scalene if all its sides are of different lengths.
// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.
var triangleType = function(nums) {
   const [a,b,c] = nums ;
   if(a + b <= c && a + c <= b && b + c <= a ){
    return "none"
   }

   if(a===b && b===c && a===c){
    return "equilateral";
   }
   else if(a===b || a===c || b===c){
    return "isosceles"
   }
   else{
    return "scalene";
   }
};
let nums = [1,2,3]
console.log(triangleType(nums));