// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const reversed = integers.sort(function(a,b){return b-a}).filter(function(number){return number <= 19}).map(function(number1){return number1 * 1.5 - 1}).reduce(function(number3, next){return number3 + next});
console.log(reversed)



 const newSection = document.createElement("p")
    const newStatement = document.createTextNode(reversed);
    newSection.appendChild(newStatement);
    document.body.appendChild(newSection);
    console.log(newStatement)
