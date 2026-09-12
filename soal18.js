const prompt = require(`prompt-sync`)({sigint:true})
let angka = Number(prompt(`Masukkan Angka : `))
if (angka % 7 === 0)
    console.log(`Selamat Anda Beruntung!`)
else
    console.log(`Anda Belum Beruntung..`)