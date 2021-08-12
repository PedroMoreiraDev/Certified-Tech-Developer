/* let operacao = prompt("Digite a operação a ser realizada:");

//exportar modulo para arquivo de soma

if (operacao == +)

    //===========================================================
 */

    

    var primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
    var segundoValor = parseInt(prompt("Digite o segundo valor:"));

    
var operação = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração");

if (operação == 1){
    let dividir=require("./dividir")

    dividir(primeiroValor, segundoValor)
} 

else if (operação == 2) {
    let multiplicar=require("./multiplicar")
    multiplicar(primeiroValor, segundoValor)
}


else if (operação == 3){
    let somar=require("./somar")
  somar(primeiroValor, segundoValor)

} else if (operação == 4) {
    let subtrair=require("./subtrair")
    subtrair(primeiroValor, segundoValor)
} else {
    alert("Opção inválida");
}







//parseInt
