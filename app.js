const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 > 0 ? num1 / num2 : "cannot divide zero";

const calculator = document.querySelector(".calculator");
const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".delete-btn");

const operate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "x":
            return multiply(num1, num2);
            break;
        case "÷":
            return divide(num1, num2);
            break;
        default:

            break;
    };
};

const returnIndex = (number) => {
        if(number.indexOf("+") > 0) {
            return number.indexOf("+")
        }
            
        if(number.indexOf("-") > 0) {
            return number.indexOf("-")
        }
            
        if(number.indexOf("x") > 0) {
            return number.indexOf("x")
        }
            
        if(number.indexOf("÷") > 0) {
            return number.indexOf("÷")
        }
}

const makeNumberOne = (number) => {
    const index = returnIndex(number);
    const num1 = parseInt(number.slice(0, index));
    return num1
};

const makeNumberTwo = (number) => {
    const index = returnIndex(number) +1;
    const num2 = parseInt(number.slice(index, number.length));
    return num2
};

const trimNumber = (number) => {
    const index = number.indexOf("=");
    const trimed = number.slice(0, index);
    return trimed 
}

const clearAll = () => {
    const resultDisplay = document.querySelector(".result");
    const operationDisplay = document.querySelector(".operation");
    resultDisplay.textContent = "";
    operationDisplay.textContent = "";
}

const deleteNum = () => {
    const operationDisplay = document.querySelector(".operation");
    const operation = operationDisplay.textContent.slice(0, operationDisplay.textContent.length-1);
    operationDisplay.textContent = operation;
}


const write = (e) => {
        const resultDisplay = document.querySelector(".result");
        const operationDisplay = document.querySelector(".operation");
        const keyValue = e.target.textContent;
        
        if(e.target.classList.contains("btn-key") && keyValue != "=") {
            operationDisplay.textContent += keyValue;
        };
        if(e.target.classList.contains("btn-key") && keyValue === "=") {
            const number = operationDisplay.textContent;
            const index = returnIndex(number);
            const num1 = makeNumberOne(number);
            const num2 = makeNumberTwo(number);
            const operation = number[index];
            const result = operate(num1, num2, operation );
            resultDisplay.textContent = result;
        }
        
};

calculator.addEventListener("click", (e) => write(e));
clearBtn.addEventListener("click", clearAll);
deleteBtn.addEventListener("click", deleteNum);

