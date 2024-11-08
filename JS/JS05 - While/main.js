// While

// let contador = 10

// while (contador <= 1000) {
//     console.log("Valor" + contador);
//     contador += 100
// }
// console.log("Fim :D");

// while (contador >= 0) {
//     console.log("Valor " + contador);
//     contador -= 2
// }
// console.log("Fim :D");

// do-While

// let num = 0

// do {
//     console.log(num);
//     num++
// } while (num <= 5);
// console.log("Fim :D");

// for

// let grupo = ["Nicolas", "Andrew", "Sabrina", "Caio"]

// Declaração Var;
// Teste;
// Incremento | Decremento

// for (let contador = 0; contador <= 5; contador++){
//     console.log("Valor" + contador);
// }

// for (let i = 0; i < grupo.length; i++){
//     console.log("Olá " + grupo[i]);
// }

// 0 - 1 - 1 -2 - 3 - 5 - 8 - 13 - 21 - 34

let num1 = 0
let num2 = 1

for (let fibonacci = 0; fibonacci <= 34; fibonacci ++){
    fibonacci = num1
    num1 = num2
    num2 += fibonacci
    console.log(fibonacci);
}