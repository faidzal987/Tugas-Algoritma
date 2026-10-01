const prompt = require('prompt-sync')({sigint:true})
let hari = Number(prompt('Berapa hari lama pekerjaan : '))
const TAHUN_KE_BULAN =  365
const BULAN_KE_HARI = 30

let tahun = bulan = sisa = 0

tahun = parseInt(hari / TAHUN_KE_BULAN)
sisa  = hari % TAHUN_KE_BULAN

bulan = parseInt(sisa / BULAN_KE_HARI)
sisa  = sisa % BULAN_KE_HARI

console.log(`
${tahun} tahun  ${bulan} bulan  ${sisa} hari
`)