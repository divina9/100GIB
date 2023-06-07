let result = ""; // Variable to store the calculation result
const container = document.querySelector('.container'); // Get the container element

const operators = ['+', '-', '*', '/']; // Array of operators

// Create number and operator buttons dynamically
for (let i = 9; i >= 0; i--) {
  const numberButton = document.createElement('input'); // Create a new input element
  numberButton.type = 'button'; // Set the input type to 'button'
  numberButton.value = i.toString(); // Set the button value to the current number
  numberButton.onclick = function () { // Assign the click event handler
    addToResult(i.toString()); // Call addToResult function with the number value
  };
  container.appendChild(numberButton); // Append the button to the container
}

for (const operator of operators) {
  const operatorButton = document.createElement('input'); // Create a new input element
  operatorButton.type = 'button'; // Set the input type to 'button'
  operatorButton.value = operator; // Set the button value to the current operator
  operatorButton.onclick = function () { // Assign the click event handler
    addToResult(operator); // Call addToResult function with the operator value
  };
  container.appendChild(operatorButton); // Append the button to the container
}

const equalButton = document.createElement('input'); // Create a new input element
equalButton.type = 'button'; // Set the input type to 'button'
equalButton.value = '='; // Set the button value to '='
equalButton.onclick = calculateResult; // Assign the click event handler to calculateResult function
container.appendChild(equalButton); // Append the button to the container

const clearButton = document.createElement('input'); // Create a new input element
clearButton.type = 'button'; // Set the input type to 'button'
clearButton.value = 'Clear'; // Set the button value to 'Clear'
clearButton.onclick = clearResult; // Assign the click event handler to clearResult function
container.appendChild(clearButton); // Append the button to the container

function addToResult(value) {
  result += value; // Add the value to the result
  document.getElementById("result").value = result; // Update the result in the UI
}

function calculateResult() {
  let calculation = result; // Store the calculation in a variable
  // Applying BODMAS rule by using eval() function
  result = eval(calculation); // Evaluate the calculation using eval()
  document.getElementById("result").value = result; // Update the result in the UI
}

function clearResult() {
  result = ""; // Clear the result
  document.getElementById("result").value = result; // Update the result in the UI
}
