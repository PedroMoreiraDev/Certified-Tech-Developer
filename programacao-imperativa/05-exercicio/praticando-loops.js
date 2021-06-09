/*
Repetir como um papagaio

Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”. */

console.log("papagaio: ")


let papagaio = function()
{
    for(let i = 0; i < 5; i++)
    {
        console.log("Olá, mundo!")
    }
}

papagaio();

//===================================================================================

/*
Contando números ímpares

Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.
*/

console.log("numeros impares: ")


let loopNumerosImpares = function()
{
    for(let i = 0; i < 10; i++)

    if(i % 2 != 0)
    {
    console.log(i)
    }
}

loopNumerosImpares();

//===================================================================================

/*

Criando a tabuada

Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for). */

console.log("tabuada: ")

let tabuada = function()
{
    for(let j = 1;  j < 10; j++)
    {
        console.log("\n")
    for(let i = 1; i < 10; i++)
    {
        console.log(i + "x" + j + "=" + i*j)
    }
    }
}
tabuada();

console.log("fim")