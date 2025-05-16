// Q9 in leet code for palindrome 
// Given an integer x, return true if x is a palindrome, and false otherwise.
//this is not the very fast way to solve this problem
function findPalindrome (x){
 if (x<0) return false;4
 let str = x.toString();
 let reversed = x.split('').reverse().join('');
return str == reverse;
}