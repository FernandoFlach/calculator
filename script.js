
let firstNumber, operator, secondNumber, equalSignPressed, lastButtonPressed;

const display = document.querySelector("#display")
const numbers = [...document.querySelectorAll(".button")].filter((id) => id.id.includes("b"));  // Includes the operation signs
const signs = [...document.querySelectorAll(".button")].filter((id) => id.id.includes("Sign")); // Clear, backspace, dot, equal sign

// Creates eventlisteners for all the buttons
for (i in numbers){
    let number = numbers[i].id[1];
    numbers[i].addEventListener("click", () => {
       // alterScreen(number);
        changeDisplay(number);
        console.log(firstNumber)
        console.log(operator)
        console.log(secondNumber)
        console.log(equalSignPressed)
    })
}

for (i in signs){
    let id = signs[i].id;
    if (id == "equalSign"){
        signs[i].addEventListener("click", () => {
            changeDisplay("=")
            console.log("operator", operator)
        })
    }
    else if (id == "clearSign"){  // Clear (A/C)
        signs[i].addEventListener("click", () => {
            display.textContent = 0;
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
    })}
    else if (id == "deleteSign"){  // Backspace
        signs[i].addEventListener("click", () => {
            display.textContent = Math.floor(display.textContent / 10);
        })
    }
}


function add(a, b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b) {
    return a * b;
}

function divide(a,b){
    return  Math.round(100 * (a / b)) / 100; // Rounds to 2 decimal places
};

function operate(a,b,op){
    if (op == "+"){
        return add(a,b);
    } 
    else if (op == "-"){
        return subtract(a,b)
    }
    else if (op == "/"){
        return divide(a,b);
    }
    else if (op == "x"){
        return multiply(a,b);
    }
}


function changeDisplay(input){
    operatorFunction(input);
    equalSignFunction(input);
    numberFunction(input, lastButtonPressed);
    lastButtonPressed = input;
}

function operatorFunction(input){
    if ("/x-+".includes(input)){
        if (operator == undefined){            // First time pressed
            firstNumber = display.textContent;
            operator = input; 
        }

        else {
            secondNumber = display.textContent;
            firstNumber = operate(firstNumber,secondNumber,operator);
            display.textContent = firstNumber;
            operator = input;
        }
    }
}

function equalSignFunction(input){
    if (input == "="){  
        secondNumber = display.textContent;
        firstNumber = operate(firstNumber,secondNumber,operator);
        display.textContent = firstNumber;
        operator = undefined;
        equalSignPressed = true;
    }
}

function numberFunction(input,lastInput){

    // If input is a number
    if (!isNaN(input)){  
        // For default 0 displayed
        if (display.textContent == 0){
            display.textContent = input;
        }
        else if ("+-/x".includes(lastInput)){
            display.textContent = input;
        }
        else {
            display.textContent += input;
        }
    }
}