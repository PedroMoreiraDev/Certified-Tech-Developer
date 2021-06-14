/* Transforme as seguintes funções em arrow functions:

function print(mensagem) {
    console.log(mensagem);
}
=====================================================================================
function soma(n1, n2){
    return n1+n2;
}

*/
let print = () => "Olá, bom dia!";

console.log(print());

//===================================================================================

let sum = (n1, n2) => n1 + n2;

console.log(sum(10,10));