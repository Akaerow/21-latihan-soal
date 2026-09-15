const prompt = require(`prompt-sync`)({sigint:true})
let angka = Number(prompt(`Masukkan Angka : `))

//ternary operator == short hand if
console.log(angka > 100 ? `Nilai Kamu Sempurna` : ``)

// if (angka > 100)
//     console.log(`Nilai Kamu Sempurna!`)
