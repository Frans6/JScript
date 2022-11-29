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
