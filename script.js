let firstNum = 0;
let secondNum = 0;
let operator = "";
let numButtons = document.querySelector("#numbers");
let functionButtons = document.querySelector("#functions");
let display = document.querySelector("#display");
let displayContent = "00000000.00";

numButtons.addEventListener("click", showDisplay);

functionButtons.addEventListener("click", function() {
    alert("hi");
})

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