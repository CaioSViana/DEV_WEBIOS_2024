let botao = document.querySelector("button")

let olhaNumero = true
if(olhaNumero === true){
    botao.style.color = "white"
    botao.style.backgroundColor = "green"
    botao.style.borderRadius = "15px"
    botao.innerHTML = "Cadastrar"
}else{
    botao.style.color = "red"
}

let paragrafo = document.querySelector("#paragrafo")
paragrafo.style.backgroundImage = "linear-gradient(45deg, yellow, red 100%)"