const calculator = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

function calculate() {
  let memory = 0;
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.innerText) {
        case "AC":
          calculator.value = "";
          break;
        case "M+":
          memory += eval(calculator.value) || 0;
          calculator.value = memory.toString();
          break;
        case "M-":
          memory -= eval(calculator.value) || 0;
          calculator.value = memory.toString();
          break;
        case "√x":
          calculator.value = Math.sqrt(eval(calculator.value) || 0).toString();
          break;
        case "<-":
          calculator.value = calculator.value.slice(0, -1);
          break;
        case "=":
          try {
            calculator.value = eval(calculator.value).toString();
          } catch {
            calculator.value = "Error";
          }
          break;
        default:
          calculator.value += button.innerText;
      }
    });
  });
}
calculate();
