const prompt = require(`prompt-sync`)({sigint:true})
let judul_buku = prompt(`Judul Buku : `)
let penerbit = prompt(`Penerbit : `)
let jumlah = Number(prompt(`Jumlah Buku : `))
let tanggal = prompt(`Tanggal Pembelian : `)
console.log(`
Judul Buku        : ${judul_buku}
Penerbit          : ${penerbit}
Jumlah Buku       : ${jumlah}
Tanggal Pembelian : ${tanggal}`)
