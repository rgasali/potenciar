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
    console.log("suma exponencial " + sumaExponencial);
  }
  resultado = Number(sumaExponencial);
  return resultado;
}

//RESTO DEL CODIGO

btnCalcularpotencia.addEventListener("click", () => {
  base = Number(inputNumeroBase.value);
  exponente = Number(inputNumeroExponente.value);
  console.log("exponente 0 " + exponente);
  if (exponente === 0) {
    divResultado.innerHTML = `el resultado es 1`;
  } else if (exponente < 0) {
    divResultado.innerHTML = "el exponente debe ser un numero positivo";
  } else potenciar(base, exponente);
  divResultado.innerHTML = `el resultado es ${resultado}`;
});
