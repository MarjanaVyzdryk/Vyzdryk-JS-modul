// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lengthOne = 'hello world';
//  console.log(lengthOne.length);
//
// let lengthTwo = 'lorem ipsum';
//  console.log(lengthTwo.length);
//
// let lengthEmpty = 'javascript is cool';
//  console.log(lengthEmpty.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lengthOne = 'hello world';
// let upOne = lengthOne.toLocaleUpperCase();
// console.log(upOne);
//
// let lengthTwo = 'lorem ipsum';
// let upTwo = lengthTwo.toLocaleUpperCase();
// console.log(upTwo);
//
// let lengthEmpty = 'javascript is cool';
// let upEmpty = lengthEmpty.toLocaleUpperCase();
// console.log(upEmpty);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lengthOne = 'HELLO WORLD';
// let lowerOne = lengthOne.toLowerCase();
// console.log(lowerOne);
//
// let lengthTwo = 'LOREM IPSUM';
// let lowerTwo = lengthTwo.toLowerCase();
// console.log(lowerTwo);
//
// let lengthEmpty = 'JAVASCRIPT IS COOL';
// let lowerEmpty = lengthEmpty.toLowerCase();
// console.log(lowerEmpty);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let dirtyString = ' dirty string   ';
// let trim = dirtyString.trim();
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);
// document.writeln(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));
// document.write(insert_dash(string));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let firstUp = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firstUp('hello world'));
// console.log(firstUp('hello world'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('veronika hi i love you'));
// console.log(capitalize('veronika hi i love you'));