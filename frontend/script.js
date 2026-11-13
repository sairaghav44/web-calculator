console.log("JavaScript connected!");

const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

let firstOperand = null;
let selectedOperator = null;

const buttons = document.querySelectorAll(".btn");

for (const button of buttons) {

    button.addEventListener("click", function () {

        const value = button.textContent;

        if (!isNaN(value)) {

            currentOperand.textContent += value;

        } else if (value === "AC") {

            currentOperand.textContent = "";

        } else if (value === "DEL") {

            currentOperand.textContent =
                currentOperand.textContent.slice(0, -1);

        } else if (["+", "−", "x", "÷"].includes(value)) {

            firstOperand = Number(currentOperand.textContent);

            selectedOperator = value;

            previousOperand.textContent = `${firstOperand} ${selectedOperator}`;

            currentOperand.textContent = "";

        } else if (value === "=") {

            const secondOperand = Number(currentOperand.textContent);

            let result;

            if (selectedOperator === "+") {
                result = firstOperand + secondOperand;
            } else if (selectedOperator === "−") {
                result = firstOperand - secondOperand;
            } else if (selectedOperator === "x") {
                result = firstOperand * secondOperand;
            } else if (selectedOperator === "÷") {
                result = firstOperand / secondOperand;
            }

            currentOperand.textContent = result;

            previousOperand.textContent = "";

            firstOperand = null;
            selectedOperator = null;

        }

    });
}