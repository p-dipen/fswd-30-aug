/* 
Task: Guess the Output (Scope Challenge)
You are given the following code. Your job is to:
Predict the output.
Explain why that output occurs.
Fix the code so that it prints:
Buggy Code:
var number = 5;
if (true) {
    var number = 10;
    console.log("Inside if block:", number);
}
console.log("Outside if block:", number);
 Expected output 

Inside if block: 10
Outside if block: 5

Current Output 
Inside if block: 10
Outside if block: 10

*/
// We are declaring a variable which name is "number" and value is "5"
var number = 5;
// this is if condition only have if block code
/* Syntax of if condition 
    if (condition) {
        // if block of code
    } 
*/
// true or false ->
// Boolean data type you will have only 2 option if you write "true" or "false"

// this condition is going to success every time
// Can we change it to fail every time ?
if (true) {
  // functional scope or block scope
  // piece of block
  // Override the number value ?
  let number = 10;
  console.log('Inside if block:', number);
}
console.log('Outside if block:', number);
