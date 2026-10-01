const prompt = require('prompt-sync')({sigint:true})
let pj = Number(prompt('Jauh perjalanan = '))

const METER_KE_CM = 100
const KIILOMETER_KE_METER = 1000
const KILOMETER_KE_CM = 100000

let km = mt = cm = sisa = 0

km   = Math.floor(pj / KILOMETER_KE_CM      )
sisa = pj % KILOMETER_KE_CM

mt    = Math.floor(sisa / METER_KE_CM )
sisa1 = sisa % KIILOMETER_KE_METER

cm    = Math.floor(sisa1 / METER_KE_CM     )
sisa2 = sisa1 % METER_KE_CM

console.log(`
Jarak Perjalanan : ${pj} cm

Maka hasil konversinya adalah:

${km}  km
${mt} m
${cm} cm
`)