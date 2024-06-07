document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));
    const clearButton = document.getElementById("clear");
    const equalsButton = document.getElementById("equals");

    let currentInput = "";
    let previousInput = "";
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");

            if (value === "." && currentInput.includes(".")) return;

            currentInput += value;
            display.textContent = currentInput;
        });
    });

    document.querySelectorAll(".operator").forEach(operatorButton => {
        operatorButton.addEventListener("click", function () {
            if (currentInput === "") return;

            if (operator !== null) calculate();

            previousInput = currentInput;
            operator = this.getAttribute("data-value");
            currentInput = "";
        });
    });

    equalsButton.addEventListener("click", calculate);

    clearButton.addEventListener("click", function () {
        currentInput = "";
        previousInput = "";
        operator = null;
        display.textContent = "";
    });

    function calculate() {
        let result;

        switch (operator) {
            case "+":
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case "-":
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case "*":
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case "/":
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
            default:
                return;
        }

        display.textContent = result;
        currentInput = result;
        previousInput = "";
        operator = null;
    }
});