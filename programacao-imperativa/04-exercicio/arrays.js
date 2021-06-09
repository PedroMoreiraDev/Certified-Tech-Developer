let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];

//==============Modifique os elementos do array para letra maiuscula=================


function converterParaMaiusculo(item, indice)
{
    filmes[indice] = filmes[indice].toUpperCase();
}
   

filmes.forEach(converterParaMaiusculo)

console.log(filmes);

//=====================retire o nome de "jogo" do segundo array abaixo===============

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

cartoons.pop()

console.log(cartoons)

//==========crie função que adiciona array de cartoons no array de filmes============


  let filmesEfilmesAnimados = [].concat(filmes,cartoons)


console.log(filmesEfilmesAnimados)
