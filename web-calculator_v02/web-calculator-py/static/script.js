console.log("JavaScript connected!");

const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

let firstOperand = null;
let selectedOperator = null;

const buttons = document.querySelectorAll(".btn");

const operationMap = {
    "+": "add",
    "−": "subtract",
    "x": "multiply",
    "÷": "divide"
};

for (const button of buttons) {

    button.addEventListener("click", async function () {

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

            const response = await fetch("/calculate", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    number1: firstOperand,
                    number2: secondOperand,
                    operation: operationMap[selectedOperator]
                })
            });

            const data = await response.json();

            if (!response.ok) {
                currentOperand.textContent = data.error;
                return;
            }

            currentOperand.textContent = data.result;

            previousOperand.textContent = "";

            firstOperand = null;
            selectedOperator = null;

        }

    });
}