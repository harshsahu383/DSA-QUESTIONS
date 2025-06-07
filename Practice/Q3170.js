// // You are given a string s. It may contain any number of '*' characters. Your task is to remove all '*' characters.

// // While there is a '*', do the following operation:

// // Delete the leftmost '*' and the smallest non-'*' character to its left. If there are several smallest characters, you can delete any of them.
// // Return the lexicographically smallest resulting string after removing all '*' characters.
// Example 1:

// Input: s = "aaba*"

// Output: "aab"

// Explanation:

// We should delete one of the 'a' characters with '*'. If we choose s[3], s becomes the lexicographically smallest.
// this is not the bestest one
var clearStars = function (s) {
    const cnt = Array(26)
        .fill()
        .map(() => []);
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "*") {
            cnt[arr[i].charCodeAt(0) - "a".charCodeAt(0)].push(i);
        } else {
            for (let j = 0; j < 26; j++) {
                if (cnt[j].length > 0) {
                    arr[cnt[j].pop()] = "*";
                    break;
                }
            }
        }
    }
    return arr.filter((c) => c !== "*").join("");
};