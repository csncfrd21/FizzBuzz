// Fizzbuzz is a game where you call out numbers in a row from 1 to 100.
//Every number that is divisible by 3 call out Fizz.
//Every nuumber that is divisible by 5 call out Buzz.
//If the number is divisible by both 5 and 3 call out FizzBuzz.

// Creat the var that will be the output numbers
// Create the var that has the value of 1 to add to output everytime the function is ran.
//Create the function that will add count to output everytime the function is ran.
// The problem with count alone is that is will just add a bunch of 1s in the array.
// Two fixes for making a number to increase ex. count++; or the code count = count + 1.

var output = [];
var count = 1;

function fizzBuzz () {
  output.push(count);
  count =  count + 1;
  console.log(output);


}

//Now we need to check to see if the count number is diviisble by 3 and or 5.

if (count % 3 === 0 && count % 5 === 0) {
  output.push("FizzBuzz");
}
else if (count % 3 === 0) {
  output.push("Fizz");
}
else if (count % 5 === 0) {
  output.push("Buzz");
}
