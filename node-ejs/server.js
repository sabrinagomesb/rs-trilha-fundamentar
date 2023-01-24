const express = require("express")
const app = express()

// informando que a ferramenta para visualizar/renderizar o html vai ser o ejs
app.set("view engine", "ejs")

// criação de rota - index precisa estar dentro de uma pasta view
app.get("/", function (req, res) {
  const items = [
    { title: "D", message: "esenvolver aplicações/serviços de forma fácil" },
    { title: "E", message: "JS usa JavaScript para renderizar HTML" },
    { title: "M", message: "uito fácil de usar" },
    { title: "A", message: "moriznho" },
    { title: "I", message: "nstall EJS" },
    { title: "S", message: "intaxe simples" },
  ]
  const subtitle = "Uma linguaguem de modelagem para criação de páginas HTML utilizando JavaScript."
  res.render("pages/index", {
    qualities: items, 
    subtitle: subtitle,

  }) // caminho do arquivo
})

app.get("/sobre", function (req, res) {
  res.render("pages/about") // caminho do arquivo
})

// função executa quando chamar a porta 8080
app.listen(8080)
console.log("Rodando")

// localhost

// comunicacao request => api
//             api =>  response
