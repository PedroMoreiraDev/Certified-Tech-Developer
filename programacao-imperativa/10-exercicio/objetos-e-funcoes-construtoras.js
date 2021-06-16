/* Objetivo
Entender a implementação de objetos e funções construtoras.
Micro desafios

Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).

Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio. */

let cardapio=['polvo, peixe frito, hamburguer de siri']

function Restaurante(nome)
{
    this.nomeRestaurante = nome
   this.cardapioRestaurante = cardapio

}

const entrada = new Restaurante('Siri Cascudo' )

console.log("Seja bem-vindo ao " + entrada.nomeRestaurante+ "!\nEm nosso cardapio temos: "+ entrada.cardapioRestaurante)