class Calculator {
  constructor(previousOutputTextElement, currentOutputTextElement) {
    this.previousOutputTextElement = previousOutputTextElement;
    this.currentOutputTextElement = currentOutputTextElement;
    this.allClear();
  }

  allClear() {
    this.currentOutput = "";
    this.previousOutput = "";
    this.operation = undefined;
  }

  clear() {
    this.currentOutput = this.currentOutput.toString().slice(0,-1)
  }

  addNumber(number) {
    if (number === "." && this.currentOutput.includes(".")) return;
    this.currentOutput = this.currentOutput.toString() + number.toString();
  }

  chooseOperator(operation) {
    if (this.currentOutput === "") return;
    if (this.previousOutput !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOutput = this.currentOutput;
    this.currentOutput = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOutput);
    const current = parseFloat(this.currentOutput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
        case "÷":
            if (current === 0) {
              this.currentOutput = "I can't divide by zero 🤖!";
              this.operation = undefined;
              this.previousOutput = "";
              return;
            } else {
              computation = prev / current;
            }
        default:
            return
    }
    this.currentOutput = computation
    this.operation = undefined
    this.previousOutput = ''
  }
  
  updateDisplay() {
    this.currentOutputTextElement.innerText = this.currentOutput;
    if(this.operation != null){
        this.previousOutputTextElement.innerText = `${this.previousOutput} ${this.operation}`;
    }
    else{
        this.previousOutputTextElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOutputTextElement = document.querySelector("[data-previous]");
const currentOutputTextElement = document.querySelector("[data-current]");

const calculator = new Calculator(
  previousOutputTextElement,
  currentOutputTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
    calculator.allClear();
    calculator.updateDisplay();
  });

  deleteButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });

// function add(a, b) {
//     return a + b
// }

// function subtract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }

// function operate(op, num, num2) {
//     switch (op) {
//         case '+':
//             return add(num, num2);
//         case '-':
//             return subtract(num, num2);
//         case '*':
//             return multiply(num, num2);
//         case '/':
//             return divide(num, num2);
//         default:
//             throw new Error('Invalid operator');
//     }
// }
