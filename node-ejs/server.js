const express = require('express')
const app = express()

// informando que a ferramenta para visualizar/renderizar o html vai ser o ejs
app.set("view engine", "ejs")

// criação de rota - index precisa estar dentro de uma pasta view
app.get("/", function (req, res) {
  res.render("index")
})

app.get("/sobre", function(req, res) {
  res.render("about")
})

// função executa quando chamar a porta 8080
app.listen(8080)
console.log("Rodando")

// localhost