var buttonNext = document.getElementById("button-next");
var bodyComplete = document.getElementById("body-complete");
var table = document.getElementById("table23n");
var calcularButton = document.getElementById("calcularButton");
var footer = document.getElementById("footer");
var optionBox = document.getElementById("turma");
var voltarButton = document.getElementById("voltarButton");
var navMenu = document.getElementById("nav-menu");
var buttonMenu = document.getElementById("button-menu");

function showSubjects() {
  let selectOption = document.getElementById("turma").value;
  footer.style.height = "4em";
  optionBox.style.display = "none";
  voltarButton.style.display = "block";
  buttonMenu.style.flexDirection = "row";
  buttonMenu.style.height = "auto";
  buttonMenu.style.marginTop = "80px";
  buttonMenu.style.marginBottom = "20px";

  if (selectOption === "23n") {
    buttonNext.style.display = "none";
    table.style.display = "table";
    calcularButton.style.display = "block";
  }
}

function calcular() {
  const inputNota1 = document.getElementsByClassName("inputNota1");
  const inputNota2 = document.getElementsByClassName("inputNota2");
  const resultados = document.getElementsByClassName("resultadoLabel");

  for (let i = 0; i < inputNota1.length; i++) {
    const valor1 = parseFloat(inputNota1[i]?.value.replace(",", ".")) || 0; // Usa o operador opcional, se nao tiver valor nao gera erro, mas sim undefined
    const valor2 = parseFloat(inputNota2[i]?.value.replace(",", ".")) || 0; // Usa o operador opcional, se nao tiver valor nao gera erro, mas sim undefined
    const resultadoFinal = (70 - (valor1 * 3 + valor2 * 3)) / 4;
    if (valor1 && valor2 !== 0) {
      if (resultadoFinal > 7) {
        resultados[i].style.color = "#ff0800 ";
      } else {
        resultados[i].style.color = "#15e800 ";
      }
      resultados[i].innerText = resultadoFinal.toPrecision(2); // Atualiza o resultado no label
    } else {
      resultados[i].innerText = "-";
    }
  }
}

function voltarFunction() {
  window.location.reload(true); //reload (f5) limpando cache
}
