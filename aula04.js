/*
 solicitar o nome do aluno e as 3 notas 
 do bimestre, calcular a média.

 se o aluno passou no bimestre, das os parabéns

 se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na
 prova de recuperação

 em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
let name = prompt("Qual o seu nome?")
let noteOne = prompt("Digite a primeira nota: ")
let noteTwo = prompt("Digite a segunda nota: ")
let noteTree = prompt("Digite a terceira nota: ")

noteOne = Number(noteOne)
noteTwo = Number(noteTwo)
noteTree = Number(noteTree)

let result = (noteOne + noteTwo + noteTree) / 3

result = result.toFixed(2)

if (result >= 6) {
  alert(`Parabéns ${name}, você está aprovado! Nota final: ${result}`)
} else {
  alert(`Que triste ${name}, estude para a prova de recuperação! Nota final: ${result}`)
}