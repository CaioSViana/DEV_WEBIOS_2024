// variaveis >>> let nome;
//funções >>> function NomeAluno(){}

// Criando uma função
// function Contador() {
//     // criar uma verificação se o número digitado é par ou impar
//     let imparPar = 4    ;
//     let numero = 1;
    
//     // se for impar então vamos apresentar na tela todos os números impares de 1 até 50
//     if(imparPar % 2 == 1) {
//         console.log("Esse número é impar");
//         for(numero; numero <= 50; numero++){
//             if (numero % 2 == 1) {
//                 console.log(numero);
//             }
//         }
//     }else if(imparPar % 2 == 0) {
//         // senão (se for par) vamos apresentar na tela todos os números pares e 1 até 50
//         console.log("Esse número é par");
//         for(numero; numero <= 50; numero++){
//             if (numero % 2 == 0) {
//                 console.log(numero);
//             }
//         }
//     }
// }

// // funcões são sempre chamadas acompanhadas de ()
// console.log(Contador());


// Arrow Function

// let BoasVindas = () => {
//     return 'Welcome to Sofrendo com JS / com TCC'
// }

// console.log(BoasVindas());

// os parenteses servem para trazer valores que estão fora da função para dentro dela, assim conseguindo trabalhar varios tipos de valores informados pelo usuario

// let Soma = (num1, num2) => {
//     return num1 + num2
// }

// console.log(Soma(3, 5));

// function Clique() {
//     let cliques = 1;

//     return cliques++;
// }

// console.log(Clique());

// let ChamaPopUp = () =>{
//     alert('Você ganhou um vírus :D')
// }

let PasseMouse = () =>{
    console.log("Não faça isso");
}

PasseMouse()