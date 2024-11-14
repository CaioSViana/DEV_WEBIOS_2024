// vamos desenvolver uma tabuada

//Pega um elemento no html utilizando o ID
let valor = document.getElementById('recebeValor')

//Pega o elemento no html utilizando o atributo name
let resultado = document.getElementById('resultado')

const Tabuada = () => {
    // Value - guarda o valor que está sendo digitado dentro da variavel
    resultado.innerHTML = ''
    resultado.style.color = "black"
    let guardaValor = valor.value; 
    if (guardaValor == '') {
        resultado.innerHTML = "<br>Insira um valor valido"
        resultado.style.color = "red"
    } else {
        for (let index = 0; index <= 10; index++) {
            console.log(`${guardaValor} x ${index} = `, guardaValor * index);
            resultado.innerHTML += (`<br>${guardaValor} x ${index} = ${guardaValor * index} `)
        }
    }
}

let limpa = document.getElementsByClassName('limpa')

const Limpar = () => {
    resultado.innerHTML = ''
    valor.value = ''
    console.clear()
}

