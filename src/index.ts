//DECLARACION DE VARIABLES
let inputNumeroBase = <HTMLInputElement>document.getElementById("base");
let inputNumeroExponente = <HTMLInputElement>(
  document.getElementById("exponente")
);
let btnCalcularpotencia = <HTMLButtonElement>(
  document.getElementById("btnCalcularPotencia")
);
let divResultado = <HTMLDivElement>document.getElementById("resultado");
let btnBase = <HTMLButtonElement>document.getElementById("btnBase");
let btnExponente = <HTMLButtonElement>document.getElementById("btnExponente");

let base: number;
let exponente: number;
let resultado: number;
let sumaExponencial: number;

//DECLARACION DE FUNCIONES:

function potenciar(base: number, exponente: number) {
  sumaExponencial = base;
  for (let contador = 1; contador < Number(exponente); contador++) {
    sumaExponencial = Number(sumaExponencial) * Number(base);
  }

  return Number(sumaExponencial);
}

//RESTO DEL CODIGO
btnBase.addEventListener("click", () => {
  base = Number(inputNumeroBase.value);
});

btnExponente.addEventListener("click", () => {
  exponente = Number(inputNumeroExponente.value);
});

btnCalcularpotencia.addEventListener("click", () => {
  if (inputNumeroExponente.value !== "") {
    divResultado.innerHTML =
      "debe ingresar un numero base y un numero exponente";
  }

  resultado = potenciar(base, exponente);
  if (exponente === 0) {
    divResultado.innerHTML = "el resultado es 1";
  } else if (exponente < 0) {
    divResultado.innerHTML = "el exponente debe ser un numero positivo";
  } else {
    divResultado.innerHTML = `El resultado es ${resultado}`;
    console.log(`El resultado es ${resultado}`);
  }
});

//pruebas de escritorio

// base    exponente   resultado esperado              resultado logrado
// 1          4               1                              1
// 3          5              243                            243
// 0          4               0                              0
//-4          3              -64                           -64
// 3          1               3                             3
// 4          0               1                            1
// 3          -1      solicitar valores positivos          solicitar valores positivos
//
