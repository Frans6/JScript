let students = [
  {
    name: "Gabriel",
    noteOne: 7,
    noteTwo: 1.5
  },
  {
    name: "David",
    noteOne: 9,
    noteTwo: 0.1
  },
  {
    name: "Nildo",
    noteOne: 4,
    noteTwo: 3
  },
  {
    name: "Italo",
    noteOne: 5,
    noteTwo: 10
  }
]

function media(one, two) {
  return ((one + two) / 2).toFixed(2)
}

function print(student) {
  let note = media(student.noteOne, student.noteTwo)

  if (note >= 7) {
    return `
    Parabéns, ${student.name}!! Você passou. Média de: ${note}
  `
  } else {
    return`
    Que pena ${student.name}, você não passou. Média de: ${note}
    `
  }
}

for (let student of students){
  let printMsg = print(student)
  alert(printMsg) 
}