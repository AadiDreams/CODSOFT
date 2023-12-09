let currentDisplay = "";
let previousNumber = "";
let operator = "";

function addNumber(number) {
    currentDisplay += number;
    document.getElementById("display").innerText = currentDisplay;
}

function addOperator(op) {
    previousNumber = currentDisplay;
    currentDisplay = "";
    operator = op;
}

function calculate() {
    let result;
    switch (operator) {
        case "+":
            result = parseFloat(previousNumber) + parseFloat(currentDisplay);
            break;
        case "-":
            result = parseFloat(previousNumber) - parseFloat(currentDisplay);
            break;
        case "*":
            result = parseFloat(previousNumber) * parseFloat(currentDisplay);
            break;
        case "/":
            result = parseFloat(previousNumber) / parseFloat(currentDisplay);
            break;
    }
    currentDisplay = result.toString();
    previousNumber = "";
    operator = "";
    document.getElementById("display").innerText = currentDisplay;
}

function clearDisplay() {
    currentDisplay = "";
    previousNumber = "";
    operator = "";
    document.getElementById("display").innerText = "";
}
