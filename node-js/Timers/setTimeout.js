// setTimeout roda uma função depois de X milisegundos

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)

console.log('mostrar')

// finished é uma função callback que será chamada de volta depois do timeOut (3 s). Função assincrona.