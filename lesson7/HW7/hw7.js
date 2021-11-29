// - Створити функцію конструктор для обєктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// }

// створити пустий масив, наповнити його 10 обєктами new User(....)

// const userArr = [
//     new User(29, 'Vasyl', 'Dar', 'vd@gmail.com', 1002001),
//     new User(30, 'Liza', 'Bar', 'lb@gmail.com', 1002002),
//     new User(31, 'Odin', 'Man', 'om@gmail.com', 1002003),
//     new User(32, 'Ira', 'Cas', 'ic@gmail.com', 1002004),
//     new User(33, 'Fara', 'Gen', 'fg@gmail.com', 1002005),
//     new User(34, 'Sven', 'Xan', 'sx@gmail.com', 1002006),
//     new User(35, 'Kali', 'Kas', 'kk@gmail.com', 1002007),
//     new User(36, 'Nik', 'Name', 'nn@gmail.com', 1002008),
//     new User(37, 'Was', 'Das', 'wd@gmail.com', 1002009),
//     new User(38, 'Fik', 'Jam', 'fj@gmail.com', 10020010),
// ];
// console.log(userArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки обєкти з парними id (filter)

// let filterUser = userArr.filter((item) => {
//     if (item.id % 2 === 0){
//     return item
//     }});
// console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// userArr.sort((a, b) => a.id - b.id);
// console.log(sortUser);

// - створити класс для обєктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = ['book','game','flower'];
//     }
// }

// створити пустий масив, наповнити його 10 обєктами Client
//
// let emptyArray = [
//     new Client(1, 'Vasyl', 'Dar', 'vd@gmail.com', 1002001, ['book', 'game', 'tv','mate']),
//     new Client(2, 'Liza', 'Bar', 'lb@gmail.com', 1002002, ['newpaper', 'vegetabels']),
//     new Client(3, 'Odin', 'Man', 'om@gmail.com', 1002003, ['football', 'flower']),
//     new Client(4, 'Ira', 'Cas', 'ic@gmail.com', 1002004, ['game']),
//     new Client(5, 'Fara', 'Gen', 'fg@gmail.com', 1002005, ['oatmeal', 'dried herbs']),
//     new Client(6, 'Sven', 'Xan', 'sx@gmail.com', 1002006, ['chocolate']),
//     new Client(7, 'Kali', 'Kas', 'kk@gmail.com', 1002007, ['arugula', 'parsley', 'tomato']),
//     new Client(8, 'Nik', 'Name', 'nn@gmail.com', 1002008, ['cucumber']),
//     new Client(9, 'Was', 'Das', 'wd@gmail.com', 1002009, ['can of coke', 'package of buckwheat']),
//     new Client(10, 'Fik', 'Jam', 'fj@gmail.com', 10020010, ['curd fritters']),
// ];
// console.log(emptyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)