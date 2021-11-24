// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// const areaRectangle = (a, b) => {
//     return a * b;
// }
// console.log(areaRectangle(5, 5));
// document.write('Площа прямокутника: ' + areaRectangle(5, 5));

// - створити функцію яка обчислює та повертає площу кола

// const areaCircle = (r) => {
//     let radius = r ** 2;
//     return 3.14 * radius;
// }
// console.log(areaCircle(20));
// document.write('Площа круга: ' + areaCircle(20));

// - створити функцію яка обчислює та повертає площу циліндру

// const areaCylinder = (r, h) => {
//     return 2 * 3.14 * r * h;
// }
// console.log(areaCylinder(5,5));
// document.write('Площа циліндра: ' + areaCylinder(5, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4,5, 'hello', 'world'];
//
// const dataArray =  (array) => {
//     for (let i = 0; i < array.length; i++) {
//        document.write(array[i]);
//     }
// }
// dataArray(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const dataP =  (text) => {
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<hr>`);
//     for (let i = 0; i <= 10; i++) {
//        document.write(`<p>${i} - ${text}</p>`);
//     }
// }
// dataP(' item text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const createUl = (arg) => {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// }
// createUl('World');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const createUlDynamic = (text, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// createUlDynamic('text li', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let anyArray = ['Mariana', 'Oleh', true, 2022];
// const primitives = (array) => {
//     document.write(`<ol>`);
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`);
// }
// primitives(anyArray);

// - створити функцію яка приймає масив обєктів з наступними полями id,name,age , та виводить їх в документ. Для кожного обєкту окремий блок.

//  let newArray = [{id: 1, name: 'Mariana', age: 36}, {id: 2, name: 'Oleh', age: 36}, {id: 3, name: 'Olia', age: 38}];
//
// const objArray = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// objArray(newArray);