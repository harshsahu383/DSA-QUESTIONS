//Q118 the pascals traingle in the leet code 
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//Approach is  being used in the dyanamic programming approach
let num = 5;
function numRows(num){
  const traingle = [];
  for(let i = 0;i<num;i++){
    let rows=[];
    for(let j = 0; j<=i;j++){
       if (j === 0 || j === i) rows.push(1);
       else{

         let prevRow = traingle[i-1];
         let sum = prevRow[j-1] + prevRow[j];
         rows.push(sum);
        }

    }
    traingle.push(rows);
  }
  return traingle;
}
console.log(numRows(num));