
let num1 = null
let num2 = null
let operator = ''
let result = null

// *** DOM connection ***
const calcInput = document.getElementById('calc-input')
const calcOutput = document.getElementById('calc-output')

calcInput.addEventListener('click', (event) => {
    // console.log(event.target.textContent)
    // *** TD = operators
    if (event.target.tagName === 'TD') {
        let userInput = event.target.innerText
        console.log(userInput)

        if (userInput === '=') {
            // operate()
        }
        else {
            operator = userInput
        }
    }
    // *** TH = numbers
    if (event.target.tagName === 'TH') {
        let userInput = event.target.innerText
        console.log(userInput)

        // *** if user has not selected OPERATOR, adjust num1
        if (operator === '') {
            if (!num1) {
                num1 = userInput
            }
            else {
                num1 += userInput
            }
        }
        else {
            if (!num2) {
                num2 = userInput
            }
            else {
                num2 += userInput
            }
        }
    }

    console.log("Number #1", num1)
    calcOutput.textContent = calcOutput.textContent + event.target.innerText
})

// *** BASIC FUNCTIONS ***
function add(num1, num2){
    result = (Number(num1) + Number(num2))
    return result;
}

function subtract(num1, num2){
    result = (num1 - num2)
    return result;
}

function multiply(num1, num2){
    result = (num1 * num2)
    return result;
}

function divide(num1, num2){
    result = (num1 / num2)
    return result;
}

function operate(operator, num1, num2){
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
        default:
            return 'error'
    }
}

// console.log(operate('-', 8, 2))