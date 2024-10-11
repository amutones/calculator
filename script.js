let firstNum = 0;
let secondNum = 0;
let operator = "";
let numButtons = document.querySelector("#numbers");
let functionButtons = document.querySelector("#functions");
let display = document.querySelector("#display");

numButtons.addEventListener("click", function() {
    display.textContent = "hi";
})

functionButtons.addEventListener("click", function() {
    alert("hi");
})

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