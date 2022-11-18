/*
 capturar 2 números e fazer 
 soma
 subtração
 multiplicação
 divisão e resto da divisão

 mostrar um alerta para cada resultado
*/

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

alert("soma: " + (numberOne + numberTwo))
alert("subtração: " + (numberOne - numberTwo))
alert("multiplicação: " + (numberOne * numberTwo))
alert("divisão: " + (numberOne / numberTwo))
alert("resto da divisão: " + (numberOne % numberTwo))