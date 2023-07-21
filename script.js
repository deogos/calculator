
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(op, num, num2) {
    switch (op) {
        case '+':
            return add(num, num2);
        case '-':
            return subtract(num, num2);
        case '*':
            return multiply(num, num2);
        case '/':
            return divide(num, num2);
        default:
            throw new Error('Invalid operator');
    }
}
