console.log('Hi into Form.js');

// We need a function to check user input. It is a number data type or not.
//

var inputBox = document.getElementById('number');

inputBox.onfocus = function () {
  inputBox.style.backgroundColor = 'yellow';
  console.log('Input field focused');
  document.getElementById('showText').innerText =
    'Input box is currently focused';
};

inputBox.onblur = function () {
  inputBox.style.backgroundColor = '';
  console.log('Input field lost focus');
  document.getElementById('showText').innerText =
    'Input box is not currently focused';
};

inputBox.onkeypress = isNumberKey;

function isNumberKey(event) {
  console.log('User is writing something', event.charCode, event.key);
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }
  return false;
}

function checkNumber1() {
  // Number % 2 == 0 ? even : odd
  var userNumber = inputBox.value;
  console.log(userNumber);

  if (userNumber != '') {
    var numType; // Null
    if (userNumber % 2 == 0) {
      numType = 'Even number';
    } else {
      numType = 'Odd number';
    }
    document.getElementById('showText').innerText = numType;
  }
}

/* 
Task Statement:
Create an input field where the user can enter a number, followed by a single space, and then another number. The input should validate that only this format is allowed:
number space number (e.g., 123 456).
 */
