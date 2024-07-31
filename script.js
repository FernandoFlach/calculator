
let firstNumber, operator, secondNumber;


const display = document.querySelector("#display")

const numbers = [...document.querySelectorAll(".button")].filter((id) => id.id.includes("b"));  // Includes the operation signs
const signs = [...document.querySelectorAll(".button")].filter((id) => id.id.includes("Sign")); // Clear, backspace, dot, equal sign

for (i in numbers){
    let number = numbers[i].id[1];
    numbers[i].addEventListener("click", () => {
        alterScreen(number);
    })
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
    return a / b;
};


function operate(a,b,op){
    if (op == "+"){
        add(a,b);
    } 
    else if (op == "-"){
        subtract(a,b)
    }
    else if (op == "/"){
        divide(a,b);
    }
    else if (op == "x"){
        multiply(a,b);
    }
}

function alterScreen(button){

    if (isNaN(button)){  
        display.textContent = button;  // For operation signs
    }
    else if (!isNaN(display.textContent)){  // When number has more than one digit
        display.textContent += button;
    }
    else {
        display.textContent = button;  // When number is typed after sign
    }

}