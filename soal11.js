const prompt = require(`prompt-sync`)({sigint:true})
let siswa1 = Number(prompt(`Jumlah Siswa X RPL 1 : `))
let siswa2 = Number(prompt(`Jumlah Siswa X RPL 2 : `))
let siswa3 = Number(prompt(`Jumlah Siswa X TKJ 1 : `))
let siswa4 = Number(prompt(`Jumlah Siswa X TKJ 2 : `))
console.log(`
Jumlah Siswa X RPL 1 : ${siswa1}
Jumlah Siswa X RPL 2 : ${siswa2}
Jumlah Siswa X TKJ 1 : ${siswa3}
Jumlah Siswa X TKJ 2 : ${siswa4}    
Jumlah Total         : ${siswa1 + siswa2 + siswa3 + siswa4} Siswa`)