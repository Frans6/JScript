/*

faça um programa que tenha um menu e apresente a seguinte mensagem:

olá usuário! digite a opção desejada

  1 - cadastrar um item na lista
  2 - mostrar itens cadastrados
  3 - sair do programa

---
o programa deverá capturar o número digitado pelo usuário e mostrar os
seguintes cenários:

caso o usuário digite 1, ele poderá cadastrar um item em uma lista
caso o usuário digite 2, ele poderá ver os itens cadastrados
  se não houver nenhum item cadastrados, mostrar mensagem:
    não existem itens cadastrados
caso o usuário digite 3, a aplicação será encerrada

*/

let option
let items = []

while (option != 3) {
    option = Number(prompt(`
    Olá usuário! digite a opção desejada
        
        1 - cadastrar um item na lista
        2 - mostrar itens cadastrados
        3 - sair do programa
    `))

    if (option == 1) {
        let item = prompt("digite o nome do item")
        items.push(item)
    } else if (option == 2) {

        if (items.length == 0) {
            alert("não existem itens cadastrados")
        } else {
            alert(items)
        }
    } else {
        alert("tchau")
    }
}
