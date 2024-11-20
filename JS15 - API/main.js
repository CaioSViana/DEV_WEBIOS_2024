
async function BuscaCep() {
    //    let resp =  await fetch(URL)

    //    let exemplo = resp.json();

    //    console.log(exemplo)

    let teste = document.getElementById("teste").value
    let URL = `https://viacep.com.br/ws/${teste}/json/`

    await fetch(URL).then((response) => {
        //Transforma JSON em OBJ
        return response.json();

    }).then((response) => {





        let CEP = document.getElementById("CEP")
        let Logradouro = document.getElementById("Logradouro")
        let Bairro = document.getElementById("Bairro")
        let Complemento = document.getElementById("Complemento")
        let Estado = document.getElementById("Estado")


        // CEP.value = response.cep
        // Logradouro.value = response.logradouro
        // Bairro.value = response.bairro
        // Complemento.value = response.complemento
        // Estado.value = response.estado

        // Outra forma
        document.getElementById("CEP").value = response.cep
        document.getElementById("Logradouro").value = response.logradouro
        document.getElementById("Bairro").value = response.bairro
        document.getElementById("Complemento").value = response.complemento
        document.getElementById("Estado").value = response.estado
    })


}
