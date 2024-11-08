const alunos = [
  { nome: "Ana", idade: 17, nota: 8, ano: "2ºB" },
  { nome: "Marta", idade: 15, nota: 5, ano: "3ºC" },
  { nome: "Bruno", idade: 16, nota: 6, ano: "2ºC" },
  { nome: "Brenno", idade: 19, nota: 6, ano: "3ºC" },
  { nome: "Veronica", idade: 16, nota: 9, ano: "2ºC" },
  { nome: "Maria", idade: 14, nota: 4, ano: "1ºF" }
];


console.log(alunos);


console.log(alunos[3]);

console.log(alunos[5].nota);


const alunosJSON = JSON.stringify(alunos);
console.log(alunosJSON);