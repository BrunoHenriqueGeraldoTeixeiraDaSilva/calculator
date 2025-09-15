const operators = document.querySelectorAll(".operators");
const digits = document.querySelectorAll(".digits");
const inputBox = document.querySelector("#input-box")
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn")
const periodBtn = document.querySelector(".period");
const backButton = document.querySelector(".back-clear");


let currentNumber = '';
let firstNumber = 0;
let operator;
let secondNumber = 0;
let answer= 0;

//Displaying the numbers
digits.forEach(number =>{
    number.addEventListener("click", () => {
        if(answer !== null && operator === null){
            inputBox.value = '';
            answer = null;
            currentNumber = '';
        }
        currentNumber += number.textContent;
        inputBox.value += number.textContent;
    });
})



//Dipslaying the operator in the screen

operators.forEach(op => {
    op.addEventListener("click", () =>{
        if(op.textContent !== '=' && operator == null){ //making sure the use cant enter mutiple operators
        firstNumber = parseFloat(currentNumber);
        operator = op.textContent;
        currentNumber = '';
        inputBox.value += op.textContent;
        }
    });
});

equalBtn.addEventListener("click", () =>{
    if(operator != null){ //Checking to see if use did not click "=" before writing out the full equation for calculator 
    secondNumber = parseFloat(currentNumber);
    operate(firstNumber, operator, secondNumber);
    };
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
    if (operator === 'x'){
        inputBox.value = multiplyNumber(firstNumber,secondNumber);
    }
    if (operator === '/'){
        inputBox.value = divideNumber(firstNumber,secondNumber);
    }
    if (operator === '%'){
        inputBox.value = modulusNumber(firstNumber,secondNumber);
    }

}



function addNumber(a,b){
    
    currentNumber = a+b;
    operator = null; // Reset operator so pressing "=" again won’t reuse the last number
    answer = a+b;
    return answer;
}

function subtractNumber(a, b){
    
    currentNumber = a-b;
    operator = null; // Reset operator so pressing "=" again won’t reuse the last number
    answer = a-b;
    return answer;
}

function multiplyNumber(a, b){
    
    currentNumber = a*b;
    operator = null;  // Reset operator so pressing "=" again won’t reuse the last number
    answer = a*b;
    return answer;
}

function divideNumber(a, b){
   
    currentNumber = a/b;
    answer = a/b;
    operator = null;  // Reset operator so pressing "=" again won’t reuse the last number
    if(b == 0){
        return "Division By Zero"
    } else{
        return answer;
    }
}

function modulusNumber(a, b){
    currentNumber = a%b;
    operator = null; 
    answer = a/b;
    return answer;
}
