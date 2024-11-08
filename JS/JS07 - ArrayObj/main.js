// Array de objetos

// Retornar o objeto
// console.log(aluno);

// retorna apenas o nome
// console.log(`O nome do aluno é: ${aluno.nome}`);

// retorna apenas o campo isChora
// console.log("O aluno " + aluno.nome + " chora demais? " + aluno.isChora);

// retorna apenas a nota de css (terceira nota)
// console.log(aluno.notas[2]);

console.clear();

let IOS = [
    {
        nome: "Manassés B",
        idade: 12,
        altura: 1.56,
        isCracha: true,
        isCamisa: false,
        isPaciencia: true,
        isChora: true,
        cor: "bege",
        notas: [10, 8, 9, 7, 8.5]
    },

    {
        nome: "Nicolas",
        idade: 17,
        altura: 1.76,
        isCracha: false,
        isCamisa: true,
        isPaciencia: true,
        isChora: false,
        cor: "preto",
        notas: [9, 10, 9, 6.5, 7.5]
    },

    {
        nome: "Maria Eduarda",
        idade: 15,
        altura: 1.80,
        isCracha: true,
        isCamisa: true,
        isPaciencia: true,
        isChora: false,
        cor: "rosa",
        notas: [9, 10, 9, 10, 9.5]
    }
]

// Mostrar o objeto por completo
console.log(IOS);

// Objeto Nicolas
console.log(IOS[1]);

// Retorna apenas as variaveis isCamisa e isCracha do objeto Nicolas
console.log(IOS[1].isCamisa, IOS[1].isCracha);

for(i = 0; i < IOS.length; i++){
    let login = IOS[i]
    if (login.isCracha == true){
        console.log("O aluno tem cracha");
    }else{
        console.log("Aluno não tem cracha");
    }
}

console.clear();

let aluno = {
    nome: "Manassés B",
    idade: 12,
    altura: 1.56,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: "bege",
    notas: [10, 8, 9, 7, 8.5]
}

// transformar o objeto em JSON
console.log(aluno);

console.log(JSON.stringify(aluno));

let Jsonito = '{"nome":"Manassés B","idade":12,"altura":1.56,"isCracha":true,"isCamisa":false,"isPaciencia":true,"isChora":true,"cor":"bege","notas":[10,8,9,7,8.5]}'

//JSON para objeto
console.log(JSON.parse(Jsonito));