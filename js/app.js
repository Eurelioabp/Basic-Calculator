function sumar() {
    const forma = document.getElementById("forma");
   let operandoA = forma["operandoA"];
   let operandoB = forma["operandoB"];
   let resultadoFinal = document.getElementById("resultado");
   let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

   if (isNaN(resultado)) {
     resultadoFinal.innerHTML = "The operation has no numbers."
   }
   else {
   resultadoFinal.innerHTML = `The result of the addition is: ${resultado}`;
   }
};

function restar() {
     const forma = document.getElementById("forma");
     let operandoA = forma["operandoA"];
     let operandoB = forma["operandoB"];
     let resultadoFinal = document.getElementById("resultado");
     let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

     if (isNaN(resultado)) {
          resultadoFinal.innerHTML = "The operation has no numbers."
        }
        else {
     resultadoFinal.innerHTML = `The result of the substraction is: ${resultado}`
        }
}

function multiplicar(){
     const forma = document.getElementById("forma");
     let operandoA = forma["operandoA"];
     let operandoB = forma["operandoB"];
     let resultadoFinal = document.getElementById("resultado");
     let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);

     if (isNaN(resultado)) {
          resultadoFinal.innerHTML = "The operation has no numbers."
        }
        else {
     resultadoFinal.innerHTML = `The result of the multiplication is: ${resultado}`
        }
}

function division(){
     const forma = document.getElementById("forma");
     let operandoA = forma["operandoA"];
     let operandoB = forma["operandoB"];
     let resultadoFinal = document.getElementById("resultado");
     let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);

     if (isNaN(resultado)) {
          resultadoFinal.innerHTML = "The operation has no numbers"
     }
     else {
          resultadoFinal.innerHTML = `The result of the division is: ${resultado}`
     }
}

