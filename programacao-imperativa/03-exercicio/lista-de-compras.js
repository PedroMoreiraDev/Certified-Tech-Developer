let produtosParaCompra = ["sabonete", "detergente", "shampoo", "amaciante", "sabão em pó"];

console.log("imprimindo a lista original")

console.log("\n===original====")


console.log("imprimindo a lista original")

console.log(produtosParaCompra);

//================================join===============================================

console.log("\n===join====")


console.log("retorna uma string com os elementos do array unidos separados por um caracter que especificamos em (). Se não especificar nada, retornará separado por vírgulas.")

let = produtosJuntos = produtosParaCompra.join("-");

console.log("imprimindo os produtos juntos")
console.log("\nimprimindo os produtos juntos - join")
console.log(produtosJuntos);


//================================pop===============================================

console.log("\n===pop====")

console.log("o comando pop elimina o ultimo elemento do array e retorna o elemento eliminado")

let = ultimoProduto = produtosParaCompra.pop();

console.log("\nreturn: imprime o produto eliminado")
console.log("\nimprimindo retorno do pop:")
console.log(ultimoProduto);

console.log("imprimindo a lista após eliminar o ultimo produto - pop:")
//imprimindo a nova lista após eliminar o produto eliminado
console.log(produtosParaCompra);

//================================push===============================================

console.log("\n===push====")

console.log("adiciona elemento na ultima posição do array")


let = adicionandoAguaSanitaria = produtosParaCompra.push("água sanitária");

console.log("\nreturn: retorna o novo número de elementos do array")

console.log("\nimprimindo retorno do push:")
console.log(adicionandoAguaSanitaria)

//imprimindo a lista após adicionar o ultimo produto
console.log("imprimindo a lista após adicionar o ultimo produto - push");
console.log(produtosParaCompra);

//================================shift==============================================

console.log("\n===shift====")


console.log("elimina o primeiro elemento do array")

let = eliminarPrimeiroElemento = produtosParaCompra.shift();

console.log("\nreturn: retorna o elemento eliminado")

console.log("\nimprimindo retorno do shift:")
console.log(eliminarPrimeiroElemento);


//imprimindo array após primeiro elemento eliminado
console.log("imprimindo a lista após eliminar o primeiro produto - push");
console.log(produtosParaCompra);

//================================unshift============================================

console.log("\n===unshift====")

console.log("Adiciona elemento no inicio do array")


let = adicionarInicio = produtosParaCompra.unshift("sabão de coco");

console.log("\nreturn: retorna numero de elementos no array")

console.log("\n imprimindo retorno de unshifit:");
console.log(adicionarInicio);

//imprimindo array após primeiro elemento adicionado
console.log("imprimindo a lista após adicionar elemento no inicio");
console.log(produtosParaCompra);
