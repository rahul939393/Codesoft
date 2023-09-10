let currentInput = '';
let operator = '';
let result = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(op) {
  if (currentInput !== '') {
    operator = op;
    currentInput += ' ' + op + ' ';
    updateDisplay(currentInput);
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  result = '';
  updateDisplay('');
}

function calculateResult() {
  if (operator && currentInput) {
    try {
      result = eval(currentInput);
      updateDisplay(result);
    } catch (error) {
      updateDisplay('Error');
    }
  }
}

function updateDisplay(value) {
  document.getElementById('result').value = value;
}
