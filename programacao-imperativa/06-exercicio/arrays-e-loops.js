//Percorra o array abaixo e exiba seus elementos:
console.log("\nPercorra o array abaixo e exiba seus elementos:")

const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

let percorreArray= function()
{
    for(i = 0;i < pontos.length;i++)
    {
        console.log(pontos[i]);
    }
}

percorreArray();

//===================================================================================

//Crie um array com valores diversos, percorra-o, altere e mostre seus elementos

console.log("\nCrie um array com valores diversos, percorra-o, altere e mostre seus elementos")

let arrayDiversos = [5, 10, 15, 20];

let percorreEalteraElementos = function()
{
    for(let i = 0; i < arrayDiversos.length; i++)
    {
        arrayDiversos[i] = arrayDiversos[i]*3;
    }
    console.log(arrayDiversos);
}

percorreEalteraElementos();

//===================================================================================

//Crie outro array, percorra-o, altere, salve e exiba seus elementos:
console.log("\nCrie outro array, percorra-o, altere, salve e exiba seus elementos:")
let enviarFrutas=function()
{
    let outroArray = ["abacaxi", "pera", "uva", "maçã"];

    return outroArray;
}

function modificarValor()
{   
    let array = enviarFrutas();
    
    for(i = 0; i < array.length; i++)
    {
        array[i] = array[i] + " - vendido";
    }
    return array;
    
}

let mostrarValor = function()
{
    let armazenarModificações = modificarValor();

    for(i=0; i < armazenarModificações.length;i++)
    {
        console.log(armazenarModificações[i])
    }
}

mostrarValor();

//===================================================================================

//Crie um último array, percorra-o, selecione os elementos, salve e mostre-os:
console.log("\nCrie um último array, percorra-o, selecione os elementos, salve e mostre-os:")

var vetor=[4,3,2,1]

let percorre = function()
{
    let salvar=[0,0,0,0]
    for(let i = 0; i < vetor.length; i++)
    {
        salvar[i] += vetor[i];
    }

    return salvar;
}

let mostrar= function()
{
    console.log(percorre());
}

mostrar()

//Exercicios extras

//1) Escrever um programa que imprime 25 termos da série 11 - 22 - 33 - 44, etc. 
console.log("\nimprimindo 25 termos da série 11")

let extra = function()
{

    for(i = 11; i <= 100; i+=11)
    {
        console.log(i);
    }
}
extra()

//================================================================================

// 2) Mostrar os múltiplos de 8 até o valor 500. A tela deve mostrar 8 -16 -24;
console.log("\nmultiplo de 8")


let multiploDe8 = function()
{
    for(i = 8; i <= 500; i += 8)
    {
        console.log(i);
    }
}

multiploDe8();

//====================================================================================

//3) Usando FOR, desenvolver um programa que mostre a tabuada de 5.

console.log("\ntabuada de 5")


let tabuadade5 = function()
{
    for(i=1; i <= 10; i++)
    {
        resultado = i*5;
        console.log(resultado);
    }
}

tabuadade5()