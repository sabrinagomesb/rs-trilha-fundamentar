// clearTimeout cancela alguma função que foi registrada pelo timeOut

const timeOut = 3000
const finished = () => console.log("done!")

let timer = setTimeout(finished, timeOut)
