/*
 capture 10 itens para compor a lista de um supermercado

 após capturar os 10 itens, imprima-os separando por vírgula
*/

let iten = [] 

for (let i = 0; i < 10; i++) {
  iten[i] = prompt(`${i + 1} item: `)
  
}

alert(iten)