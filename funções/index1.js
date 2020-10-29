// escopo global
let name= "Naruto";
// criação da assinatura e lista de argumentos (parametros) no caso 1 parametro chamado nome
function nameAgain(nome)
{
  //escopo local
  nome = "Kakashi";
  return nome;
}

console.log(nameAgain(name));


console.log(name);