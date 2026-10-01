const prompt = require('prompt-sync')({sigint:true})
let xx = Number(prompt('Masukan angka x : '))
let yy = Number(prompt('Masukan angka y : '))
let zz = Number(prompt('Masukan angka z : '))

//sebelum ditukarkan
console.log(`Nilai x sebelum ditukar : ${xx}`)
console.log(`Nilai y sebekum ditukar : ${yy}`)
console.log(`Nilai z sebelum ditukar : ${zz}`)

//sesudah ditukarkan 
console.log('________________________________________________')
{
console.log(`Nilai x setelah ditukarkan ke nilai y : ${yy} `)
console.log(`Nilai x setelah ditukarkan ke nilai z : ${zz} `)
}
console.log('________________________________________________')
{
console.log(`Nilai y setelah ditukarkan ke nilai x : ${xx} `)
console.log(`Nilai y setelah ditukarkan ke nilai z : ${zz} `)
}
console.log('________________________________________________')
{
console.log(`Nilai z setelah ditukarkan ke nilai x : ${xx} `)
console.log(`Nilai z setelah ditukarkan ke nilai y : ${yy} `)
}