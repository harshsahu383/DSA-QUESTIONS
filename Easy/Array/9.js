// Q9 in leet code for palindrome 
// Given an integer x, return true if x is a palindrome, and false otherwise.
//this is not the very fast way to solve this problem
function findPalindrome (x){
 if (x<0) return false;4
 let str = x.toString();
 let reversed = x.split('').reverse().join('');
return str == reverse;
}
function palindrome(x){
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed = 0;

  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  
  return x === reversed || x === Math.floor(reversed / 10);
}