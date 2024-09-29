var buttonNext = document.getElementById("button-next");
var bodyComplete = document.getElementById("body-complete");
var table = document.getElementById("table23n");
var resultado = document.getElementById("resultadoBiologia");
var calcularButton = document.getElementById("calcularButton");

function showSubjects() {
  let selectOption = document.getElementById("turma").value;

  if (selectOption === "23n") {
    buttonNext.style.display = "none";
    table.style.display = "table";
    calcularButton.style.display = "block";
  }
}

function calcular() {
  var notaOneBiologia = document.getElementById("notaOneBiologia").value;
  var notaTwoBiologia = document.getElementById("notaTwoBiologia").value;
  var calculo = (70 - (notaOneBiologia * 3 + notaTwoBiologia * 3)) / 4;
  resultado.innerText = calculo.toPrecision(2);
}
