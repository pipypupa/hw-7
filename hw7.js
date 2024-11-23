// 1. Перейменовано змінні та числа.
let numbers1 = [100, 200, 300];
numbers1[1] = 1000;
console.log(numbers1);

// 2. Перейменовано змінні та рядки.
let numbers2 = ["one", "two", "three"];
numbers2.push("four");
console.log(numbers2);

// 3.
const numbers3 = [10, 20, 30];
let sum = 0;
for (let i = 0; i < numbers3.length; i++) {
  sum += numbers3[i];
}
console.log(sum);

// 4.
const numbers4 = [50, 100, 200, 400, 800];
for (let i = 0; i < numbers4.length; i++) {
  console.log(numbers4[i]);
}

// 5.
const numbers5 = [
  "numberone",
  "numbertwo",
  "numberthree",
  "numberfour",
  "numberfive",
];
for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i].length > 9) {
    console.log(numbers5[i]);
  }
}

// 6.
const numbers6 = [900, 330, 150, 480, 120, 670, 230, 890, 60, 370];
let biggestNumber = numbers6[0];
for (let i = 1; i < numbers6.length; i++) {
  if (numbers6[i] > biggestNumber) {
    biggestNumber = numbers6[i];
  }
}
console.log(biggestNumber); // Вивід: 900

// 7.
const numbers7 = [90, 33, 15, 48, 12, 67, 23, 89, 6, 37];
for (let i = 0; i < numbers7.length; i++) {
  if (numbers7[i] % 2 === 0) {
    console.log(numbers7[i]);
  }
}
