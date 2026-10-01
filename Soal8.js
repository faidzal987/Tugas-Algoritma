const prompt = require('prompt-sync')({sigint:true})

let tb = Number(prompt('Masukan Tinggi Badan : '))

tb1 = tb - 100
tb2 = 0.1 * tb1

hasil = tb1 - tb2

console.log(`
Berat Badan Ideal Kamu Adalah : ${hasil} kg`)
