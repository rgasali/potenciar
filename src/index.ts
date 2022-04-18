//DECLARACION DE VARIABLES
let inputNumeroBase = <HTMLInputElement>document.getElementById("base");
let inputNumeroExponente = <HTMLInputElement>(
  document.getElementById("exponente")
);
let btnCalcularpotencia = <HTMLButtonElement>(
  document.getElementById("btnCalcularPotencia")
);
let divResultado = <HTMLDivElement>document.getElementById("resultado");

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
  resultado = Number(sumaExponencial);
  return resultado;
}

//RESTO DEL CODIGO

btnCalcularpotencia.addEventListener("click", () => {
  base = Number(inputNumeroBase.value);
  exponente = Number(inputNumeroExponente.value);

  //if (exponente === 0) {
  // console.log("exponente 0 " + exponente);
  //divResultado.innerHTML = "el resultado es 1";
  //} else if (exponente < 0) {
  //  console.log("exponente menor a cero " + exponente);
  //   divResultado.innerHTML = "el exponente debe ser un numero positivo";
  //} else
  potenciar(base, exponente);
  if (exponente === 0) {
    divResultado.innerHTML = "el resultado es 1";
  } else if (exponente < 0) {
    divResultado.innerHTML = "el exponente debe ser un numero positivo";
  } else divResultado.innerHTML = `el resultado es ${resultado}`;
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
