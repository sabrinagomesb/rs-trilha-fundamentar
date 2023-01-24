const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?"
]

const ask = ( index = 0) => {
  process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
    Massa!

    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceu hoje:
    ${answers[1]}
    
    O que você poderia melhorar:
    ${answers[2]}
    
    O que te deixou feliz hoje:
    ${answers[3]}

    Volte amanhã para novas reflexões!
  `)
})

// quando tiver dados a função ficará ouvindo. A função vai rodar sempre que tiver um dado.
