<<<<<<< HEAD
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)
soma = numberOne + numberTwo

alert("soma: " + soma)
alert("subtração: " + (numberOne - numberTwo))
alert("multiplicação: " + (numberOne * numberTwo))
alert("divisão: " + (numberOne / numberTwo))
alert("resto da divisão: " + (numberOne % numberTwo))

if (soma % 2 == 0) {
  alert("a soma dos números resulta em um número par")
} else {
  alert("a soma dos números resulta em um número ímpar")
}

if (numberOne == numberTwo) {
  alert("os dois números são iguais")
} else {
  alert("os dois números são diferentes")
}
=======
/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "luiz",
    age: 20,
    weight: 100,
    height: 190
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
>>>>>>> bae1b6dd200a818f1e56a90a5f1507d57416548b
