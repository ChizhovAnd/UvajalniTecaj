// 1.1
const ime = "Ana";
const kraj = "Celje";
console.log(`${ime} zivi v ${kraj}`);

// 1.2
let n1 = 12;
let n2 = 5;
console.log(n1+n2, n1-n2, n1*n2, n1/n2)

// 1.3
const wight = 22;
const height = 12;
let P = (wight+height)*2
console.log(P)

// 1.4
const C = 22;
let F = (C * 9 / 5) + 32;
console.log(F);

// 1.5
const minut = 61;
let hours = Math.floor(minut/60);
let min = minut%60;
console.log(`${minut} minuts = ${hours}h and ${min}m`)

// 1.6
const grades = [5, 1, 2];

let suma = 0;
for (let i = 0; i< grades.length ; i++ ) {
    suma+= grades[i];
};
console.log(suma)

// 1.7
let product = "Knjiga";
let kol = 3;
let price = 15;
console.log(`${product} stane ${price} EUR, kolicina: ${kol}`);
