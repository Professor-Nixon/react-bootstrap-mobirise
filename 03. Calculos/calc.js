
function calc(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  let op = document.getElementById("op").value;

  let result =
    op == "+"
      ? n1 + n2
      : op == "-"
        ? n1 - n2
        : op == "*"
          ? n1 * n2
          : op == "/"
            ? n1 / n2
            : op == "%"
              ? n1 % n2
              : op == "**" 
              ? n1 ** n2 
              : "Operador inválido.";

  document.getElementById("result").innerHTML = `Resultado: ${result}`;
}
