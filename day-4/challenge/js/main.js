'use strict';
// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

// let numOne = prompt('First Number:');
// let numTwo = prompt('Second Number:');

// if (numOne > numTwo) {
//   alert(numOne);
// } else if (numTwo > numOne) {
//   alert(numTwo);
// } else {
//   alert('They are equal.');
// }
const validate = () => {
  let num = parseInt(prompt('Number:'));
  if (isNaN(num)) {
    alert('bad');
    validate();
  } else {
    return num;
  }
};

let numOne = validate();
let numTwo = validate();

if (numOne > numTwo) {
  alert(numOne);
} else if (numTwo > numOne) {
  alert(numTwo);
} else {
  alert('Are equal');
}
