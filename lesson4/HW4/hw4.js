 // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sRect(a, b) {
    return a * b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
function sRound(r) {
    return 3.14 * r * r;
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sCylinder(r, h) {
    return 2 * 3.14 * r * h;
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(arr) {
    for (const item of arr ) {
        console.log(item);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

 function creatP(text) {
    document.write(`<p>${text}</p>`);
 }
 creatP('Hello world')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

 function creatUl1(text) {
    document.write(`<ul>`);
     document.write(`<li>${text}</li>`);
     document.write(`<li>${text}</li>`);
     document.write(`<li>${text}</li>`);
     document.write(`</ul>`);
 }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
 // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

 function creatUl1(text) {
     document.write(`<ul>`);
     for (let i = 0; i < text.length; i++) {
         const item = text[i];
     }
     document.write(`</ul>`);
 }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

 function printArray2(arr) {
     document.write(`<ul>`);
     for (const item of arr) {
         document.write(`<li>${item}</li>`);
     }
     document.write(`</ul>`);
 }

// - створити функцію яка приймає масив обєктів з наступними полями id,name,age , та виводить їх в документ.
 // Для кожного обєкту окремий блок.

function printArrayOfObject(arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age} </div>`);
    }
}
