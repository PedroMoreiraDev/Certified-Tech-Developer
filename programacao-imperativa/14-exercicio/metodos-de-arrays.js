/* Objetivo
Entender a implementação e funcionamento dos métodos relacionados a arrays.
Micro desafios

1 - Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

2 - Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

3 - Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”


4 - Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”. */


let arraypar=[2,4,6,8];

let arrayimpar = arraypar.map(function(num){

    return num+1;

});

console.log(arrayimpar)
//========================= 02 =======================================

let nomes = ['maria', 'josefa', 'margarida', 'maria', 'cleuza']

let nomesmaria = nomes.filter(function(filter){
    return filter == 'maria'

})

console.log(nomesmaria)

//====================== 03 ============================================

let numeros = [5, 4, 8, 10, 22]

let soma = numeros.reduce(
    function(acumulador, numero){
        return  acumulador + '-' + numero;
    }
)

console.log(soma);

//====================== 04 ============================================

let animals = ['Cabra', 'Gato', 'Camelo', 'Leão', 'Camaleão']

animals.forEach(function(putanimals){
    console.log('O animal É: ' + putanimals)
})