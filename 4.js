// 4.1
function sayHy() {
    console.log("Привет, красавчик");
}
sayHy()

// 4.2
function hyIme(ime) {
    console.log(`Привет, ${ime} !`);
}
hyIme("Andrei")

// 4.3
function sq(stevilka) {
    console.log(stevilka**2);
}
sq(24)

// 4.4
function isAdult(age) {
    if (age >= 18) {
        console.log('true');
    } else {
        console.log('false');
    }
}
isAdult(17)
isAdult(27)

// 4.5
let chisla = [2, 1, 3, 9]
function sum(massiv) {
    let suma = 0;
    for (let i = 0; i < (massiv.length); i++) {
        suma = suma +  massiv[i];
    }
    return suma
}

function srznach(chis) {
    return (sum(chis) / chis.length)
}
console.log(srznach(chisla));

// 4.6
const kniga = {
    name : "Город",
    avtor : "Клифорд",
    year : 1952
};
console.log(kniga)

// 4.7
const ljudi = [
    {ime: 'Andrei', age: 19},
    {ime: 'Nastja', age: 20},
    {ime: 'Sasha', age: 15}
]
for (const imena of ljudi) {
    console.log(imena.ime)
}
