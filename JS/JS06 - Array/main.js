// let valores = [85, 17, "Andrew", "Nicolas"]
// console.log(valores);

// let metodoPop = valores.pop()

// console.log(valores);
// console.log(metodoPop);

// console.log("============================================");

// valores.push("Gigi")
// console.log(valores);

// console.log("============================================");

// let removerElemento = valores.shift()
// console.log(valores);

// console.log("============================================");

// valores.unshift("Ermeson")
// console.log();

// pop - Remove o último elemento do array
// push - Adiciona um elemento na última posição do array
// shift - Remove o primero elemento do array
// unshift - Adiciona um elemento na primeira posição do array
// toString - Tranforma variáveis em String
// join - Tranforma variáveis em String e definir um elemento de separação entre os itens do array

// let notas = [6, 8, 9, 5]

// let novasNotas = notas.join(" - ")

// console.log(notas);
// console.log(novasNotas);

// console.log(notas);
// console.log(typeof notas[0]);

// let novasNotas = notas.toString()

// console.log(novasNotas);
// console.log(typeof novasNotas[0]);

// let carros = ["Celta", "Fusca", "Prisma", "HB20"]

// let car1 = carros.pop()
// console.log(carros);

// carros.unshift(car1)
// console.log(carros);

// let car2 = carros.join(" * ")

// console.log(car2.toUpperCase());

// let notas = [ [2, 6, 9, 10], [3, 4, 5, 8] ]

// console.log(notas[1][2]);
// console.log(delete notas[0][2]);

// Crie um array com 5 frutas.
// Remova o último elemento do seu array
// Adicione a fruta "Banana" no último elemento do array
// Remova o segundo elemento do array [1]
// Passe seu array para string com o método join utlizando o " - "
// Apresente em tela o LOG

let frutas = ["Abacaxi", "Abacate", "Manga", "Morango", "Pêra"]

console.log(frutas);

frutas.pop();

console.log(frutas);

frutas.push("Banana");

console.log(frutas);

delete frutas[1];

console.log(frutas);

novoFrutas = frutas.join(" - ");

console.log(novoFrutas);