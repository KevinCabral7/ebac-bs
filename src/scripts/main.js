function calcular(operador, operando1, operando2) {
  switch (operador) {
    case "+":
      return operando1 + operando2;
    case "-":
      return operando1 - operando2;
    case "*":
      return operando1 * operando2;
    case "/":
      return operando1 / operando2;
    default:
      return NaN;
  }
}

function exibirResultado() {
  var operador = document.getElementById("operador").value;
  var operando1 = parseFloat(document.getElementById("operando1").value);
  var operando2 = parseFloat(document.getElementById("operando2").value);

  var resultado = calcular(operador, operando1, operando2);

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function limparCampos() {
  document.getElementById("operador").value = "";
  document.getElementById("operando1").value = "";
  document.getElementById("operando2").value = "";
  document.getElementById("resultado").innerHTML = "";
}
