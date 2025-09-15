const operators = document.querySelectorAll(".operators");
const digits = document.querySelectorAll(".digits");
const inputBox = document.querySelector("#input-box")
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn")

let currentNumber = '';
let firstNumber = 0;
let operator;
let secondNumber = 0;

//Displaying the numbers
digits.forEach(number =>{
    number.addEventListener("click", () => {
        currentNumber += number.textContent;
        inputBox.value += number.textContent;
    });
})

//Dipslaying the operator in the screen
operators.forEach(op => {
    op.addEventListener("click", () =>{
        if(op.textContent !== '='){
        firstNumber = parseInt(currentNumber);
        operator = op.textContent;
        currentNumber = '';
        inputBox.value += op.textContent;
        }
    });
});

equalBtn.addEventListener("click", () =>{
    secondNumber = parseInt(currentNumber);
    currentNumber = '';
    operate(firstNumber, operator, secondNumber);
})

//reseting the display when clicking clear button
clearBtn.addEventListener("click", () =>{
    currentNumber = '';
    firstNumber = 0;
    operator = null;
    secondNumber = 0;
    inputBox.value = "";
})




function operate(firstNumber, operator, secondNumber){
    if (operator === '+'){
        inputBox.value = addNumber(firstNumber,secondNumber);
    }
    if (operator === '-'){
        inputBox.value = subtractNumber(firstNumber,secondNumber);
    }
    if (operator === '*'){
        inputBox.value = multiplyNumber(firstNumber,secondNumber);
    }
    if (operator === '/'){
        inputBox.value = divideNumber(firstNumber,secondNumber);
    }

}



function addNumber(a,b){
    inputBox.value = '';
    currentNumber = a+b;
    return a+b;
}

function subtractNumber(a, b){
    inputBox.value = '';
    currentNumber = a-b;
    return a-b;
}

function multiplyNumber(a, b){
    inputBox.value = '';
    currentNumber = a*b;
    return a * b;
}

function divideNumber(a, b){
    inputBox.value = '';
    currentNumber = a/b;
    return a/b;
}
