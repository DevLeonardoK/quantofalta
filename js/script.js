var buttonNext = document.getElementById("button-next");
var bodyComplete = document.getElementById("body-complete");
var table23Normal = document.getElementById("table23n");
var table23Tone = document.getElementById("table23t1");
var table23Ttwo = document.getElementById("table23t2");
var calcularButton = document.getElementById("calcularButton");
var footer = document.getElementById("footer");
var optionBox = document.getElementById("turma");
var voltarButton = document.getElementById("voltarButton");
var navMenu = document.getElementById("nav-menu");
var buttonMenu = document.getElementById("button-menu");
var emailInput = document.getElementById("email");
var enviarBtn = document.getElementById("enviar");
var buttonPdf = document.getElementById("btnPdf");
var selectOption = document.getElementById("turma").value;

function showSubjects() {
  let selectOption = document.getElementById("turma").value;
  footer.style.height = "4em";
  optionBox.style.display = "none";
  voltarButton.style.display = "block";
  buttonMenu.style.flexDirection = "row";
  buttonMenu.style.height = "auto";
  buttonMenu.style.marginTop = "100px";
  buttonMenu.style.marginBottom = "20px";
  buttonPdf.style.display = "block";

  if (window.screen.width >= 1024) {
    buttonMenu.style.display = "flex";
    buttonMenu.style.flexDirection = "row";
    buttonMenu.style.gap = "5em";
    buttonMenu.style.width = "340px";
    buttonMenu.style.justifyContent = "center";
  }

  if (selectOption === "23n") {
    buttonNext.style.display = "none";
    table23Normal.style.display = "table";
    calcularButton.style.display = "block";
  }

  if (selectOption === "23t1") {
    buttonNext.style.display = "none";
    table23Tone.style.display = "table";
    calcularButton.style.display = "block";
    buttonMenu.style.marginTop = "0px";
    emailInput.style.marginTop = "35px";
    enviarBtn.style.marginTop = "35px";
  }

  if (selectOption === "23t2") {
    buttonNext.style.display = "none";
    table23Ttwo.style.display = "table";
    calcularButton.style.display = "block";
    buttonMenu.style.marginTop = "0px";
    emailInput.style.marginTop = "35px";
    enviarBtn.style.marginTop = "35px";
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

function downloadPdf() {
  var table23Normal = document.getElementById("table23n");
  var table23Tone = document.getElementById("table23t1");
  var table23Ttwo = document.getElementById("table23t2");
  if (table23Normal.style.display === "table") {
    let item = document.getElementById("table23n");
    var options = {
      margin: [10, 10, 10, 10],
      filename: "QuantoFalta.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(item).save();
  }

  if (table23Tone.style.display === "table") {
    let item = document.getElementById("table23t1");
    var options = {
      margin: [10, 10, 10, 10],
      filename: "QuantoFalta.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(item).save();
  }

  if (table23Ttwo.style.display === "table") {
    let item = document.getElementById("table23t2");
    var options = {
      margin: [30, 30, 30, 30],
      filename: "QuantoFalta.pdf",
      html2canvas: { scale: 1 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(item).save();
  }
}

function voltarFunction() {
  window.location.reload(true); //reload (f5) limpando cache
}

function sendMail() {
  let parms = {
    email_user: document.getElementById("email").value,
    message: document.getElementById("mensagem").value,
  };

  emailjs
    .send("service_h32qbef", "template_7jdnpe9", parms)
    .then(alert("Email Enviado...."));
}
