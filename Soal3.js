const prompt = require('prompt-sync')({sigint: true})

let tanggal1 = Number(prompt('Masukan tanggal 1 : '))
let tanggal2 = Number(prompt('Masukan tanggal 2 : '))

const TAHUN_KE_BULAN = 365
const BULAN_KE_HARI = 30

let tahun = bulan = sisa = 0
    tahun = parseInt(tanggal1 / TAHUN_KE_BULAN)
    sisa = tanggal1 % TAHUN_KE_BULAN

    bulan = parseInt(sisa / BULAN_KE_HARI)
    sisa = sisa % BULAN_KE_HARI


// tanggal 2
let tahun2 = bulan2 = sisa2 = 0
    tahun2 = parseInt(tanggal2 / TAHUN_KE_BULAN)
    sisa2 = tanggal2 % TAHUN_KE_BULAN

    bulan2 = parseInt(sisa2 / BULAN_KE_HARI)
    sisa2 = sisa2 % BULAN_KE_HARI


// tanggal
let tgl = 0
let tpp = 0
let tkk = 0

// jika hari tanggal 1 lebih kecil dari tanggal 2,
// maka pinjam 1 bulan
if (sisa < sisa2) {
    bulan = bulan - 1
    sisa = sisa + BULAN_KE_HARI
}

tgl = parseInt(tahun - tahun2)
tpp = parseInt(bulan - bulan2)
tkk = parseInt(sisa - sisa2)


console.log(`
tanggal1
${tahun} tahun ${bulan} bulan ${sisa} hari

tanggal2
${tahun2} tahun ${bulan2} bulan ${sisa2} hari

selisih
${tgl} tahun ${tpp} bulan ${tkk} hari
`)