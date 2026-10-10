/*
// 3.1 
for (let i = 1; i<11; i++) {
    console.log(i);
}

// 3.2
for (let i = 10; i>0; i--) {
    console.log(i);
}

// 3.3
for (let i = 1; i < 31 ; i++) {
    if (i%3==0) {
        console.log(i);
    }
}

// 3.4
let sum = 0;
for (let i = 1; i <= 100; i++ ) {
    sum+=i;
}
console.log(sum);

// 3.5

let fifka = [1, 2, 30, 4, 5];
for (let i = 0; i < fifka.length; i++) {
    console.log(fifka[i]);
}

// 3.6
let sum = 0;
let fifka = [1, 2, 30, 4, 5];
for (let i = 0; i < fifka.length; i++) {
    sum+= fifka[i];
}
console.log(sum)

// 3.7
let fifka = [-20, 40, -0, 1, 123, -1000];
let kol = 0;
for (let i = 0; i < fifka.length; i++ ) {
    if (fifka[i] > 0) {
        kol++
    }
}
console.log(kol);
*/
// 3.8
let chiselki = [50, 29, 55, 99, -100, 99, 101];
let max = chiselki[0];
for (let i = 1; i<chiselki.length; i++) {
    if (chiselki[i] > max) {
        max = chiselki[i];
    }
}
console.log(max);

// 3.9
console.log(chiselki.reverse())