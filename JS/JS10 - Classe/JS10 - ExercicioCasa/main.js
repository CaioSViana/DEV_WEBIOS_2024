class contaBancaria {
  constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.sexo = sexo;
    this.agencia = agencia;
    this.conta = conta;
    this.numeroConta = numeroConta;
  }

  contaPoupança() {
    if (this.conta == "Poupança") {
      return this.salario - this.salario * 0.015;
    } else {
      console.log("Está pessoa não possui uma conta Poupança.");
    }
  }

  contaCorrente() {
    if (this.conta == "Corrente") {
      return this.salario - this.salario * 0.036;
    } else {
      console.log("Está pessoa não possui uma conta Corrente.");
    }
  }

  contaEstudante() {
    if (this.conta == "Estudante") {
      return this.salario - this.salario * 0.012;
    } else {
      console.log("Está pessoa não possui uma conta Estudante.");
    }
  }
}


let exemplo1 = new contaBancaria('Manassés', 27, 2000, 'M', 3, 'Poupança', 754569)

let exemplo2 = new contaBancaria('Lukas', 29, 3200, 'M', 7, 'Corrente', 586542)

let exemplo3 = new contaBancaria('Giovanni', 23, 1800, 'M', 2, 'Estudante', 653542)

console.log(`Segue informações da conta: Nome: ${exemplo1.nome}, Idade: ${exemplo1.idade} anos, Salário: ${exemplo1.salario}, Sexo: ${exemplo1.sexo}, Agência: ${exemplo1.agencia}, Tipo de Conta: ${exemplo1.conta}, Número da Conta: ${exemplo1.numeroConta} O novo salário com a taxa descontada é: ${exemplo1.contaPoupança()}`)

console.log(`Segue informações da conta: Nome: ${exemplo2.nome}, Idade: ${exemplo2.idade} anos, Salário: ${exemplo2.salario}, Sexo: ${exemplo2.sexo}, Agência: ${exemplo2.agencia}, Tipo de Conta: ${exemplo2.conta}, Número da Conta: ${exemplo2.numeroConta} O novo salário com a taxa descontada é: ${exemplo2.contaCorrente()}`)

console.log(`Segue informações da conta: Nome: ${exemplo3.nome}, Idade: ${exemplo3.idade} anos, Salário: ${exemplo3.salario}, Sexo: ${exemplo3.sexo}, Agência: ${exemplo3.agencia}, Tipo de Conta: ${exemplo3.conta}, Número da Conta: ${exemplo3.numeroConta} O novo salário com a taxa descontada é:  ${exemplo3.contaEstudante()}`)
