const prompt = require ('prompt-sync')({sigint:true})
let uang = (prompt('Masukan Nilai Uang : '))

let pecahan1000 = pecahan500 = pecahan100 = pecahan50 = pecahan25 = 0

pecahan1000 = Math.floor(uang / 1000);
uang1 = uang % 1000;

pecahan500 = Math.floor(uang / 500);
uang2 = uang % 500;

pecahan100 = Math.floor(uang / 100);
uang3 = uang % 100;

pecahan50 = Math.floor(uang / 50);
uang4 = uang % 50;

pecahan25 = Math.floor(uang / 25);
uang5 = uang % 25;

console.log("Pecahan Rp1000 =", pecahan1000, "buah");
console.log("Pecahan Rp500  =", pecahan500,  "buah");
console.log("Pecahan Rp100  =", pecahan100,  "buah");
console.log("Pecahan Rp50   =", pecahan50,   "buah");
console.log("Pecahan Rp25   =", pecahan25,   "buah");