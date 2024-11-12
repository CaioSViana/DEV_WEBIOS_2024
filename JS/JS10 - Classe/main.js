class Aluno{
    constructor(nome, ano, altura, isCracha, isCamisa, cor){
        this.nome = nome;
        this.ano = ano;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
    }

    retornaidade(){
        let dataCompleta = new Date();
        let pegaAno = dataCompleta.getFullYear();
        return pegaAno - this.ano
    }

}

let aluno1 = new Aluno('Manassés', 1997, 1.90, true, true, 'Black')

console.log(`A idade do Manassés é: ${aluno1.retornaidade()}`)
console.log(aluno1.nome, aluno1.ano)

let aluno2 = new Aluno('Jefferson', 2005, 1.75, true, true, 'All white')

console.log(`A idade do Jefferson é: ${aluno2.retornaidade()}`)