let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // Faço a consulta na API e retorno o JSON na variavel resp
    let resp = await fetch(URL)

    // Pegar o retorno em JSON e transformar ele em um Objeto
    let teste = resp.json()

    console.log(teste)
}

DogApi()