let screen = document.getElementById("screen");

let buttons = document.querySelectorAll("button");

let screenValue = "";

for (let item of buttons) {
  // para agregar eventos a los elementos seleccionados
  // primer parametro es el evento y despues la funcion callback a realizar
  item.addEventListener("click", (e) => {
    //  console.log(event.target.innerHTML);
    let buttonText = e.target.innerHTML;

    console.log("button text is " + buttonText);

    switch (buttonText) {
      case "⌫":
        screenValue = screenValue.substring(0, screen.value.length - 1);
        screen.value = screenValue;
        break;
      case "%":
        buttonText = "/100*";
        screenValue += buttonText;
        screen.value = screenValue;
        break;
      case "π":
        buttonText = "3,1416";
        screenValue += buttonText;
        screen.value = screenValue;
        break;
      case "√":
        buttonText = "sqrt(";
        screenValue += buttonText;
        screen.value = screenValue;
        break;
      case "X":
        buttonText = "*";
        screenValue += buttonText;
        screen.value = screenValue;
        break;
      case "AC":
        screenValue = "";
        screen.value = screenValue;
        break;

      case "=":
        screen.value = math.evaluate(screenValue);
        break;

      default:
        screenValue += buttonText;
        screen.value = screenValue;
        break;
    }
  });
}
