// 2566  Maximum Difference by Remapping a Digit

// // You are given an integer num. You know that Bob will sneakily remap one of the 10 possible digits (0 to 9) to another digit.

// // Return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num.

// // Notes:

// // When Bob remaps a digit d1 to another digit d2, Bob replaces all occurrences of d1 in num with d2.
// // Bob can remap a digit to itself, in which case num does not change.
// // Bob can remap different digits for obtaining minimum and maximum values respectively.
// // The resulting number after remapping can contain leading zeroes.
 

// // Example 1:

// // Input: num = 11891
// // Output: 99009
// // Explanation: 
// // To achieve the maximum value, Bob can remap the digit 1 to the digit 9 to yield 99899.
// // To achieve the minimum value, Bob can remap the digit 1 to the digit 0, yielding 890.
// // The difference between these two numbers is 99009.
var minMaxDifference = function (num) {
    let s = num.toString();
    let t = s;
    let pos = 0;
    while (pos < s.length && s[pos] === "9") {
        pos++;
    }
    if (pos < s.length) {
        s = s.replace(new RegExp(s[pos], "g"), "9")
    }
    t = t.replace(new RegExp(t[0], "g"), "0")
    return parseInt(s) - parseInt(t);
};