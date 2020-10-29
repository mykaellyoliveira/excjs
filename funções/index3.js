
/*Crie uma função que seja uma calculadora.*/

/* soma
  subtração
  multiplicação
  divisão
  retorna 0 */

const SOMA = 'somar';
const SUB = 'subtrair';
const MULT = 'multiplicar';
const DIV = 'dividir';


function calculadora(tipoCalculo, num, num2) {
  let total=0;
  switch(tipoCalculo) {
    case SOMA:
      total = soma(num, num2);
      break;
    case SUB:
      total = subtrair(num, num2);
    case MULT:
      total = multiplicar(num, num2)
      ;
    case DIV:
      total = dividir(num, num2)
      ;
    default:
      return total;
    break;
  }
  return total;
}

function soma(numero, numero2) {
  return numero + numero2;
}

console.log(calculadora(SOMA, 2, 3))
