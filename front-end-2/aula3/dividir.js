let dividir = function (primeiroValor, segundoValor){
        if((primeiroValor == 0 ) || (segundoValor == 0)){
        return "Não é possivel dividir por 0"
    }
       else
         alert(primeiroValor / segundoValor)
}

console.log(dividir(0,2))

modulo.exports=dividir