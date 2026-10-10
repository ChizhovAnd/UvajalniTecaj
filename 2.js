// 2.1  
let number = -10;
if (number < 0) {
    console.log("Меньше 0");
} else if (number > 0) {
    console.log("Больше 0");
} else {
    console.log("Равно 0");
}

// 2.2
const starost = 18;
if (starost >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Не совершеннолетний")
}

// 2.3
const num = 3;
if (num%2===0) {
    console.log("Чётное");
} else {
    console.log("Нeчётное");
}

// 2.4 
const nu1 = 211;
const nu2 = 21;
if (nu1===nu2) {
    console.log("Они равны");
} else if (nu1> nu2) {
    console.log(nu1);
} else {
    console.log(nu2);
}

// 2.5
const mark = 5;
if (mark < 6) {
    console.log("not passed");
} else {
    console.log("passed");
}

// 2.6
const temp = 22;
if (temp < 10) {
    console.log("Cold");
} else if (temp > 20) {
    console.log("Hot");
} else {
    console.log("good");
}

// 2.7

const mes = Number(prompt("Сколько вам лет?"));
if (mes >= 18) {
    console.log("Добро пожаловать!");
} else {
    console.log("Доступ запрещён");
}

mes >= 18 ? console.log("Совершеннолетний") : console.log("Не совершеннолетний");