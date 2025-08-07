// Declaring and assign a value
var score = 50;
// Declaring and assing a value
let Grade = 'C';
console.log('score:', score); // 50
// Value ? score = 50; 50 > 40 ? yes
if (score > 40) {
  // Re-declaring and re-assing value
  var score = 80;
  console.log('score:', score); // 80
  // We are just re-assign a value
  Grade = 'B';
}
// Declaring a new variable with value 100
var Score = 100;

console.log('score:', score); // 80
console.log('Score:', Score); // 100
console.log('Grade:', Grade); // B

/* 
What will the console output be?

A)
score: 80
Score: 100
Grade: B

B)
score: 50
Score: 100
Grade: C

C)
score: 80
Score: 100
Grade: C

D)
score: 50
Score: 100
Grade: B

*/
