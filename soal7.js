const prompt = require(`prompt-sync`)({sigint:true})
const a = 8.3
const c = 3.2
console.log(`
8.3 + 3.2 = ${a + c}
8.3 - 3.2 = ${a - c}
8.3 x 3.2 = ${a * c}
8.3 / 3.2 = ${a / c}
8.3 % 3.2 = ${a % c}`)