/*
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