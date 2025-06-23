// You are given two positive integers n and limit.

// Return the total number of ways to distribute n candies among 3 children such that no child gets more than limit candies.

 

// Example 1:
//brute force is applying to solve this problems


// Input: n = 5, limit = 2
// Output: 3//
// Explanation: There are 3 ways to distribute 5 candies such that no child gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).
class Solution {

    public long distributeCandies(int n, int limit) {
        return (cal(n + 2) -
                3 * cal(n - limit + 1) +
                3 * cal(n - (limit + 1) * 2 + 2) -
                cal(n - 3 * (limit + 1) + 2));
    }

    public long cal(int x) {
        if (x < 0) {
            return 0;
        }
        return ((long) x * (x - 1)) / 2;
    }
}