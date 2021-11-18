// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
//
// let string = ['a', 'b', 'c', 'd', 'e'];
// console.log(string);
//
// let arr = [1, 2, 3, 'a', 'b', true];
// console.log(arr);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr [0] = 100;
// arr [1] = 'aaa';
// arr [2] = 200;
// arr [3] = 'bbb';
// arr [4] = 300;
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>flower</div>`);
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>flower</div>`+ i);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<20) {
//     document.write('<h1>hello</h1>');
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20) {
//     document.write(`<h1>hello ${i + 1}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (let i = 0; i < numbers.length; i++) {
// //     const number = numbers[i];
// //     console.log(number);
// // }
//
// for (const number of numbers) {
//     console.log(number);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let str = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
// for (const string of str) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true];
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'boolean'); {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'number'); {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'string'); {
//         console.log(arrElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr [0] = '1';
// arr [1] = 100;
// arr [2] = 'aaa';
// arr [3] = 'bbb';
// arr [4] = true;
// arr [5] = false;
// arr [6] = 200;
// arr [7] = 300;
// arr [8] = 'ccc';
// arr [9] = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(`element ${i} is ${arr[i]}`);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true];
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true];
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', true];
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`${i}`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }