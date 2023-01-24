const { EventEmitter} = require('events')
const ev = new EventEmitter()

// ouvindo a emissão dos eventos (precisa vir antes da emissão)
ev.on('saySomething', (message) => {
  console.log('Eu ouvi você: ', message)
})

// emitindo um evento
ev.emit('saySomething', "Mayk")
ev.emit('saySomething', "Sabrina")

// ev.once para ouvir uma única vez (apenas a primeira emissão)
// ev.once("saySomething", (message) => {
//   console.log("Eu ouvi você: ", message)
// })
