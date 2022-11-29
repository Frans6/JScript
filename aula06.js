/*
<<<<<<< HEAD
crie uma lista de pacientes

cada paciente dentro da lista deverá conter 
  nome
  idade
  peso
  altura

escreva uma lista contendo o nome dos pacientes

*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsName = []

// for(let i = 0; i < patients.length; i++){
//   patientsName[i] = patients[i].name
// }

for (let patient of patients){
  patientsName.push(patient.name)
}

alert(patientsName)
=======
 apresente a mensagem ao usuário:
 "adivinhe o número que estou pensando? Está entre
 0 e 10"

 crie uma lógica para gerar um número aleatório e 
 verificar se o número digitado é o mesmo que o 
 aleatório gerado pelo sistema.

 enquanto o usuário não adivinhar o número, mostrar
 a mensagem: Erro, tente novamente:

 caso o usuário acerte o número, apresentar a mensagem
 Parabéns! você adivinhou o número em X tentativas

 substitua o x da mensagem, pelo número de tentativas

*/

let result = prompt("adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let i = 1

while( Number(result) != randomNumber ){
  result = prompt("Erro, tente novamente: ")
  i ++
}

alert(`Parabéns! Você adivinhou o número em ${i} tentativas`)
>>>>>>> bae1b6dd200a818f1e56a90a5f1507d57416548b
