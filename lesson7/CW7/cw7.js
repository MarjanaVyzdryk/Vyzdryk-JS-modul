// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Cars(model, zavod, year, maxspeed, volume) {
//     this.model = model;
//     this.zavod = zavod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let addCar = new Cars('Tesla', 'USA', 2020, 280, 2.0);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(40);
// addCar.drive();
// addCar.changeYear(2020);
// addCar.info();
// addCar.addDriver('Oleh');
// console.log(addCar);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// class Cars2 {
//     constructor(model, producer, year, maxspeed, engineVal) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engineVal = engineVal;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     newMaxSpeed (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let addCar2 = new Cars2('Tesla', 'USA', 2020, 280, 2.0);
// console.log(addCar2);
// addCar2.drive();
// addCar2.info();
// addCar2.newMaxSpeed(40);
// addCar2.drive();
// addCar2.changeYear(2020)
// addCar2.info();
// addCar2.addDriver('Oleh')
// console.log(addCar2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popelushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// const popelushkaArray = [
//     new Popelushka('Ira', 20, 35),
//     new Popelushka('Moana', 18, 38),
//     new Popelushka('Galya', 39, 43),
//     new Popelushka('Mery', 25, 36),
//     new Popelushka('Fiona', 35, 40),
//     new Popelushka('Bella', 75, 37),
//     new Popelushka('Rozita', 50, 39),
//     new Popelushka('Pokahontes', 30, 34),
// ];
// console.log(popelushkaArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Princ {
//     constructor(name, age, findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose;
//     }
// }
// const prince = new Princ('Shrek', 35, 45);
//
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// const newPara = (popelushkaArray, prince) => {
//     for (const item of popelushkaArray) {
//         if (item.footsize === prince.findShose) {
//             return `tvoya populushka: ${item.name}`
//         }
//     }
// };
// console.log(newPara(popelushkaArray,prince));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// const emptyPrincess = popelushkaArray.find((item) => item.footsize === prince.findShose);
// console.log(emptyPrincess);
