let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () => {
    //     // Faço a consulta na API e retorno o JSON na variavel resp
    //     let resp = await fetch(URL)

    //     // Pegar o retorno em JSON e transformar ele em um Objeto
    //     let teste = resp.json()

    //  /   console.log(teste)
    await fetch(url).then((response) => {

        // Transforma o json recebido pelo fetch em obj
        return response.json();
    }).then((response) => {
        // Apresentar as informações para o usuário 

        document.getElementById('mostraJson').innerText = JSON.stringify(response);
        let = image = `<img src="${response.message}" style="width: 200px" alt="">`

        document.getElementById('mostraIMG').innerHTML = image;
    })
}

DogApi()