// Pegar o valor do Input
let valor = document.querySelector('input')

//Pegar o valor do resultado
let resultado = document.querySelector('span')

//Função
let Calcular = () => {
    let guardaValor = valor.value
    novoSalario = (guardaValor * 1.17) + 215
    resultado.innerHTML = `O novo salário é ${novoSalario}`
}