document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready");
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    console.log(display);
    console.log(buttons);

    function evaluateResult() {
        const converted = currentVal.replace("x", "*").replace("÷", "/").replace("%", "*0.01");

        const result = eval(converted);
        currentVal = result.toString();
        display.value = currentVal;
    }

    let currentVal = "";

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;
            if (value == "AC") {
                currentVal = "";
                display.value = currentVal;
            }
            else if (value == "=") {
                evaluateResult();
            }

            else {
                currentVal += value;
                display.value = currentVal;
            }

        })
    }
});
