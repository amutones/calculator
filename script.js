let firstNum = 0;
let secondNum = 0;
let operator = "";
let numButtons = document.querySelector("#numbers");
let functionButtons = document.querySelector("#functions");
let display = document.querySelector("#display");
const defaultContent = "00000000.00"
let displayContent = defaultContent;


numButtons.addEventListener("click", showDisplay);

functionButtons.addEventListener("click", getOperator);

function getOperator(e){
    operator = e.target.id;
    console.log(operator);
    operate(firstNum, secondNum, operator);
}

function showDisplay(event) {
    const btn = event.target;
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
}

function operate(a, b, c) {
    switch (c) {
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break; 
        case "clear":
            display.textContent = defaultContent;
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

}