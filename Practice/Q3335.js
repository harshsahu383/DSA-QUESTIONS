// You are given a string s and an integer t, representing the number of transformations to perform. In one transformation, every character in s is replaced according to the following rules:

// If the character is 'z', replace it with the string "ab".
// Otherwise, replace it with the next character in the alphabet. For example, 'a' is replaced with 'b', 'b' is replaced with 'c', and so on.
// Return the length of the resulting string after exactly t transformations.

// Since the answer may be very large, return it modulo 109 + 7.

function getLengthOfChar(s,t){
        const MOD = 1e9 + 7;


        let count = new Array(26).fill(0);

        
        for (let i = 0; i < s.length; i++) {
          let index = s.charCodeAt(i) - "a".charCodeAt(0);
          count[index]++;
        }

       
        for (let time = 0; time < t; time++) {
          let newCount = new Array(26).fill(0);

          for (let i = 0; i < 26; i++) {
            if (i === 25) {
             
              newCount[0] = (newCount[0] + count[25]) % MOD;
              newCount[1] = (newCount[1] + count[25]) % MOD;
            } else {
            
              newCount[i + 1] = (newCount[i + 1] + count[i]) % MOD;
            }
          }

         
          count = newCount;
        }

        
        let totalLength = 0;
        for (let i = 0; i < 26; i++) {
          totalLength = (totalLength + count[i]) % MOD;
        }

        return totalLength;
}