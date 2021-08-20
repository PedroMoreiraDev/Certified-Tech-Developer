let dividir = function (primeiroValor, segundoValor){
        if((primeiroValor == 0 ) || (segundoValor == 0)){
        return "Não é possivel dividir por 0"
    }
       else
         return alert(primeiroValor / segundoValor)
}
modulo.exports=dividir