let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];

let poderosoChefao = filmes[filmes.length -3]

console.log(poderosoChefao);

//=========================adicione elementos ao array=============================

filmes.push("matrix");

console.log(filmes);

//========================exclua um elemento do array==============================

filmes.shift();

console.log(filmes);

//=============Modificar array para letra maiuscula===========


function converterParaMaiusculo(item, indice)
{
    filmes[indice] = filmes[indice].toUpperCase();
}
   

filmes.forEach(converterParaMaiusculo)

console.log(filmes)

//=================comparar elementos de array====================
