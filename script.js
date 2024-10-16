let firstNum = 0;
let secondNum = 0;
let result = 0;
let operator = "";
let previousOperator = "";
let numButtons = document.querySelector("#numbers");
let functionButtons = document.querySelector("#functions");
let display = document.querySelector("#display");
const defaultContent = "0";
let displayContent = defaultContent;
let decimalButton = document.querySelector("#decimal");



numButtons.addEventListener("click", showDisplay);

functionButtons.addEventListener("click", getOperator);

function getOperator(e){
    operator = e.target.id;
    secondNum = Number(displayContent);
    operate(firstNum, secondNum, operator);
}

function showDisplay(event) {
    const btn = event.target;
    if(Number(displayContent.charAt(0)) === 0) {
        displayContent = "";
    }
    if (displayContent.length < 8) {
        displayContent = displayContent.concat(btn.innerText); 
    }
    else if(displayContent.length === 8){
        displayContent = displayContent;    
    }
    else {
        displayContent = btn.innerText;
    }

    display.textContent = displayContent;

    if(displayContent.includes(".")) {
        decimalButton.disabled = true;
    }
}

function operate(a, b, c) {
    switch (c) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break; 
        case "clear":
            clear();
            break;
        case "equal":
            break;
        default:
            break;
    }
}

function add(a, b){
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function clear() {
    firstNum = 0;
    secondNum = 0;
    displayContent = defaultContent;
    display.textContent = displayContent;
    decimalButton.disabled = false;
}

function roundAnswer(a) {
    return Math.round(a * 100) / 100;
}