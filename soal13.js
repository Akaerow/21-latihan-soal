const prompt = require(`prompt-sync`)({sigint:true})
let harga_makanan = Number(prompt(`Harga Makanan : `))
let pajak = harga_makanan * 0.10
let fee = harga_makanan * 0.05
let harga_bayar = harga_makanan + pajak + fee
console.log(`
Harga Makanan : ${harga_makanan}
Pajak         : ${pajak}
Fee           : ${fee}
Harga Bayar   : ${harga_bayar}`)