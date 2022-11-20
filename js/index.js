 let valor1 = "";
let valor2 = "";
let resultado;
let operador = "";
let del; 


 
  
  function preencher(numero) {
    let aux = document.getElementById("visor").value;
    if (aux == "0") {
      document.getElementById("visor").value = numero;
      
    } else {
      document.getElementById("visor").value += numero;
      
    }
  }
  
 
  
  function operacion(sinal) {
    if (valor1 == "") {
      operador = sinal;
      valor1 = parseFloat(document.getElementById("visor").value);
      document.getElementById("visor").value = "";
    } else {
      switch (operador) {
        case "+":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) + parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        case "-":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) - parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        case "/":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) / parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        case "*":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) * parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        default:
          resultado = valor1;
          break;
      }
    }
  }
  
 
  
 
  
  document.getElementById("calcular") .addEventListener("click", function calcular() {
    switch (operador) {
      case "+":
        resultado = valor1 + parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "es-UY"
        );
        break;
      case "-":
        resultado = valor1 - parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "es-UY"
        );
        break;
      case "/":
        resultado = valor1 / parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "es-UY"
        );
        break;
      case "*":
        resultado = valor1 * parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "es-UY"
        );
        break;
      default:
        resultado = valor1;
        document.getElementById("visor").value = resultado.toLocaleString(
          "es-UY"
        );
        break;
    }
    valor1 = "";
    operador = "";
  });
  
  // fucion para sacar el porcentaje
  document.getElementById("porcentaje") .addEventListener("click",function porcentaje() {
    valor2 = parseFloat(document.getElementById("visor").value);
    if (operador == "*") {
      resultado = (valor1 / 100) * valor2;
    }
    document.getElementById("visor").value = resultado;
  });
  
  // Funcion para quitar un número del visor
  document.getElementById("backspace") .addEventListener("click",function backspace() {
    del = document.getElementById("visor").value;
    document.getElementById("visor").value = del.length;
    document.getElementById("visor").value = del.substr(0, del.length - 1);
  });

   // Funcion para alterar para número positivo o negativo
   document.getElementById("masMenos") .addEventListener("click",function maisMenos(event) {
    if (document.getElementById("visor").value == "") {
      document.getElementById("visor").value = "-";
    } else {
      document.getElementById("visor").value = "";
      alert("Para usar este boton el visor debe estar vacio")
      

    }
  });

   // Funcion para alterar para vorrar valor de visor  
  document.getElementById("buttonC") .addEventListener("click",function pasarCero() {
    document.getElementById("visor").value = 0;
    valor1 = "";
    operador = "";
  });

   // Funcion para poner coma 
  document.getElementById("coma") .addEventListener("click",function coma() {
   document.getElementById("visor").value += ".";
 }
 );
  