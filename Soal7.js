const prompt = require ('prompt-sync') ({sigint:true})

let pj = Number(prompt('Panjang Benda : '))

const INCH_KE_MM = 25.4
const KAKI_KE_CM = 30.48
const YARD_KE_METER = 0.9144

let inch = kaki = yard = sisa = 0

inch = Math.floor(pj / INCH_KE_MM)

kaki = Math.floor(pj / KAKI_KE_CM)

yard = Math.floor(pj / YARD_KE_METER)

console.log(`
Konversi Satuan :
${inch} mm
${kaki} cm
${yard} m
`)