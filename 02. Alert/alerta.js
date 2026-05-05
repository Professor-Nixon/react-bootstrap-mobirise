function alerta() {
       document.getElementById("alerta").style.display = "block";
}

function calcular() {
  let num01 = parseFloat(document.getElementById("num01").value);
  let num02 = parseFloat(document.getElementById("num02").value);

  let soma = num01 + num02;

  document.getElementById("resultado").innerHTML = soma.toFixed(2);
}
