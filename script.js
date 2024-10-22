const DEFAULT_CONTENT = 0;
const MAX_RESULT = 999999999;
let previousNum = DEFAULT_CONTENT;
let displayNum = DEFAULT_CONTENT;
let result = DEFAULT_CONTENT;
let previousResult = DEFAULT_CONTENT;
let operator = "";
let previousOperator = "";
let numButtons = document.querySelector("#numbers");
let functionButtons = document.querySelector("#functions");
let display = document.querySelector("#display");
let displayContent = DEFAULT_CONTENT;
let decimalButton = document.querySelector("#decimal");


numButtons.addEventListener("click", showDisplay);

functionButtons.addEventListener("click", getOperator);


function showDisplay(e) {
    const btn = e.target;
    if (btn.id === "decimal" && (displayContent === "" || displayContent === DEFAULT_CONTENT)) {
        displayContent = "0.";
    }
    else if (displayContent === DEFAULT_CONTENT) {
        displayContent = "";
        displayContent = displayContent.concat(btn.innerText); 
    }
    else if (displayContent.length < 8) {
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

function getOperator(e){
    operator = e.target.id;
    displayNum = Number(displayContent);
    if (previousOperator === "") {
        previousOperator = operator;
        previousNum = displayNum;
        result = displayNum;
    }
    else if (operator === "clear") {
        result = clear();
    }
    else if (operator === "equal") {
        result = operate(previousNum, displayNum, previousOperator);
        previousNum = result;
        
    }
    else {
        result = operate(previousNum, displayNum, previousOperator);
        previousNum = result;
        previousOperator = operator;
    }
    display.textContent = result;
    console.log("End of function\npreviousNum: ", previousNum, "\ndisplayNum: ", displayNum, "\nresult: ", result, "\npreviousOperator: ", previousOperator);
    displayContent = "";   
}

function operate(a, b, c) {
    switch (c) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
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
    if (b === 0) {
        return "ERROR!";
    }
    else {
        return a / b;
    }
}
function clear() {
    previousNum = DEFAULT_CONTENT;
    displayNum = DEFAULT_CONTENT;
    previousOperator = "";
    decimalButton.disabled = false;
    return DEFAULT_CONTENT;
}

function roundAnswer(a) {
    return Math.round(a * 100) / 100;
}

function checkResult(a) {
    if (a >= MAX_RESULT) {
        return MAX_RESULT;
    } else {
        return a;
    }
    
}