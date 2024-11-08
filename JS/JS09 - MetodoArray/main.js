// Array

let frutas = ["Amora", "Banana", "Abacate", "Jabuticaba", "Abacaxi", "Manga", "Kiwi", "Uva"] // Coloque o nome de 8 frutas

frutas.forEach((valor, indice) =>{
    console.log(valor); // Conteúdo da posição
    console.log(indice); // Número da posição
})

// frutas.forEach(Percorrer)

//               conteúdo - indice
// function Percorrer(valor, indice){
//   console.log(valor); // Conteúdo da posição
//   console.log(indice); // Número da posição
// }

// for(i = 0; frutas.length > i; i++){
//   console.log(frutas[i]); // Conteúdo da posição
//   console.log(i); // Número da posição
// }


console.clear()

// let Marcas = ["Apple", "Samsung", "Motorola", "Xiaomi", "Realme", "LG"]


let numeros = [1, 22, 34, 47, 2, 6]
let numerosDois = numeros.map(Math.sqrt)
let maiorNumero = Math.max.apply(Math, numeros)
let menorNumero = Math.min.apply(Math, numeros)




console.log(numerosDois)
console.log(maiorNumero)
console.log(menorNumero)

console.log(maiorNumero + " " + menorNumero)

console.log


let filtraNumero = numeros.filter((valor) =>{
    return valor >= 16
})

console.log(filtraNumero)



console.clear()


let tarefa =[
    {
        tarefa: "Dormir",
        isFeita: true
    },
    {
        tarefa: "limpar",
        isFeta: false
    },
    {
        tarefa: "torcer",
        isFeita: true
    }
]

let item = []
let retornTrue = tarefa.find( (item) =>{
    return item.isFeita == true
}
)

console.log(retornTrue)

