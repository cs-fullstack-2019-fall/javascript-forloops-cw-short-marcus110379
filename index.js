// ## Exercise 1:
// Use a for loop to print numbers -3 through 8.

for (var i = -3; i <= 8; i++){
    console.log(i);
 }
// ## Exercise 2:
// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.

for (var i = 0; i <= 50; i++){
    if (i === 10){
        console.log("Ten!!");
    }else{
        console.log(i);
    }
}


// ## Exercise 3:
// Prompt the user to enter a number. Prompt the user to enter another number. Create a for loop that counts from the first number to the second number.

var userNum1 = parseInt(prompt("Enter a number"));
var userNum2 = parseInt(prompt("Enter a number"));

for (var i = userNum1; i <= userNum2; i++){
    console.log(i);
}