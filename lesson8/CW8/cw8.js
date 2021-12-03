// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let main_header = document.getElementById('main_header');
// main_header.innerText = 'September 2021 QA Okten School';

// b) робить шириниу елементу ul 400px

// let ul = document.getElementsByTagName('ul');
// console.log(ul)
// ul[0].style.width = '400px';
// ul[0].style.border = '1px solid black';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let li = document.getElementsByClassName('linkList');
// for (const liElement of li) {
//     liElement.style.border = '1px solid black';
//     liElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let liText = document.getElementsByClassName('listElement2');
// console.log(liText);
// liText[0].innerHTML = '<a href=""><b>QA Testing</b></a>';

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liAll = document.getElementsByTagName('li');
// console.log(liAll);
// for (const liAllElement of liAll) {
//     liAllElement.style.backgroundColor = 'grey';
//     liAllElement.style.margin = '2px';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (let aAllElement of aAll) {
//     aAllElement.classList.add('anchor')
//     console.log(aAllElement);
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (let aAllElement of aAll) {
//     console.log(aAllElement);
//     if (aAllElement.innerText === 'link3') {
//         aAllElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (let aAllElement of aAll) {
//     console.log(aAllElement);
//     let newClass = aAllElement.innerText
//     aAllElement.classList.add(`element_${newClass}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let allSubHeader = document.getElementsByClassName('sub-header');
// console.log(allSubHeader);
// for (const el of allSubHeader) {
//     el.style.color = prompt('Enter color: (red, green, blue, silver)');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let allSubHeader = document.getElementsByClassName('sub-header');
// for (const el of allSubHeader) {
//     console.log(el);
//     if (el.innerText === 'content 2 segment') {
//         el.style.color = prompt('Enter color: (red, green, blue, silver)');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content_1 = document.getElementsByClassName('content_1');
console.log(content_1[0].innerText);
content_1[0].innerText = prompt('Enter new TEXT');

// l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px';
    pElement.style.border = '1px solid black';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let m = document.getElementsByClassName('text2');
console.log(m)
m[0].innerText = 'sep-2021';
