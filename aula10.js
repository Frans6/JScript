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