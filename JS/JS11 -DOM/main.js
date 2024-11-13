document.body.style.backgroundColor = "black"

document.title = "Dom Dom Dom"

// Alterar o atributo lang
document.documentElement.lang = "pt-br"
// document.documentElement = navigator.language

//criação de elementos
let newButton = document.createElement('BUTTON')

//informar em qual tag queremos inserir o botão
document.body.appendChild(newButton).innerHTML = "Enviar"

//inserir estilo no botão
newButton.style.background = "red"
newButton.style.borderRadius = "5px"