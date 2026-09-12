const prompt = require(`prompt-sync`)({sigint:true})
let harga_barang = Number(prompt(`Total Harga Barang : `))
if (harga_barang >= 200000)
    diskon = harga_barang * 0.075
else (diskon = 0)
    total_bayar = harga_barang - diskon
console.log(`
Total Harga Barang : ${harga_barang}
Diskon             : ${diskon}
Total Bayar        : ${total_bayar}`)