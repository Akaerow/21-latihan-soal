const prompt = require(`prompt-sync`)({sigint:true})
let r = Number(prompt(`Jari-Jari : `))
const Phi = 3.14
let volume = 4/3 * Phi * r**3
let luas = 4 * Phi * r**2
console.log(`
Volume : ${volume.toFixed(2)} cm
Luas   : ${luas.toFixed(2)} cm`)