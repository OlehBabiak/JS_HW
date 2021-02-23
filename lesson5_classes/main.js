//  -Створити функцію конструктор для об 'єкту який описує теги
// Властивості
//     -
//     назва тегу -
//     опис його дій -
//     масив з атрибутами(2 - 3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
//     -
//     назву атрибуту -
//     опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
//     -
//     a -
//     div -
//     h1 -
//     span -
//     input -
//     form -
//     option -
//     select
// Приклад результату {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [{
//             titleOfAttr: 'accesskey',
//             actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//         },
//         {
//             /*some props and values*/ },
//         {
//             /*...*/ },
//         {
//             /*...*/ },
//     ]

// } 

// function TagDescribe(titleOfTag, tagAction, attrs) {
// this.titleOfTag = titleOfTag; //назва тегу
// this.tagAction = tagAction; //опис дій
// this.attrs = attrs; //масив з атрибутами
// }
// let tagA = new TagDescribe('a', 'Цей тег є одним з важливих елементів HTML і призначений для створення посилань', [{
// 		accesskey: 'Активація посилання за допомогою комбінації клавіш',
//         coords: 'Встановлює координати активної області.' }]);
    
// console.log(tagA)





// === === === === === === === === === === === === === === =


// = -Створити класс для об 'єкту який описує теги
// Властивості
//     -
//     назва тегу -
//     опис його дій -
//     масив з атрибутами(2 - 3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
//     -
//     назву атрибуту -
//     опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
//     -
//     a -
//     div -
//     h1 -
//     span -
//     input -
//     form -
//     option -
//     select
// Приклад результату {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [{
//             titleOfAttr: 'accesskey',
//             actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//         },
//         {
//             /*some props and values*/ },
//         {
//             /*...*/ },
//         {
//             /*...*/ },
//     ]

// } ===

// class TagDescribe {
//     constructor(titleOfTag, tagAction, attrs){
//  this.titleOfTag = titleOfTag; //назва тегу
//  this.tagAction = tagAction; //опис дій
//  this.attrs = attrs; //масив з атрибутами
//     }
   
// }

// let tagA = new TagDescribe('a', 'Цей тег є одним з важливих елементів HTML і призначений для створення посилань', [{
//     accesskey: 'Активація посилання за допомогою комбінації клавіш',
//     coords: 'Встановлює координати активної області.'
// }]);

// console.log(tagA)




// === === === === === === === === === === === === === === =



// ===
// === === === === === === === === === === === === === === = -
//  Створити об 'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
// єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'
// єкт car
//     ===
//     === === === === === === === === === === === === === === =

// let car = {
//     model: 'Fusion',
//     producer: 'Ford',
//     year: 2016,
//     topSpeed: 250,
//     enginVolume: 240,
//     drive: function() {
//             console.log(`їдемо зі швидкістю ${this.topSpeed} км на годину`)
//         },
//     info: function() {
//             console.log(`model: ${this.model};\n producer: ${this.producer};\n year: ${this.year};\n top speed: ${this.topSpeed};\n engine volume: ${this.enginVolume}`);
//         },
//     increaseMaxSpeed: function(newSpeed) {
//             console.log(`New top speed: ${this.topSpeed += newSpeed}`);
//         },
//     changeYear: function(newValue) {
//             console.log(`New prod year: ${this.year += newValue}`);
//         },
//     addDriver: function(driver) {
//             this.driver = driver
//             console.log(car);
//         }
//     }

// console.log(car);
// car.drive()
// car.info()
// car.increaseMaxSpeed(50)
// car.changeYear(5)
// car.addDriver({name: 'Oleh', age: 40})

//     ===
//     === === === === === === === === === === === === === === = -
// Створити функцію конструктор яка дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
// єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'
// єкт car
//     

// function Car(model, producer, year, topSpeed, enginVolume) {
    
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.enginVolume = enginVolume;

    
//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} км на годину`)
//     }
//     this.info = function() {
//         console.log(`model: ${this.model};\n producer: ${this.producer};\n year: ${this.year};\n top speed: ${this.topSpeed};\n engine volume: ${this.enginVolume}`);
//     }
//     this.increaseMaxSpeed = function(newSpeed) {
//         console.log(`New top speed: ${this.topSpeed += newSpeed}`);
//     }
//     this.changeYear = function(newValue) {
//         console.log(`New prod year: ${this.year += newValue}`);
//     }
//     this.addDriver = function(driver) {
//         this.driver = driver
//         console.log(car1);
//     }
// }

// let car1 = new Car('A6', 'Audi', 2016, 250, 280)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(20)
// car1.changeYear(2)
// car1.addDriver({
//     name: 'Kostja',
//     age: 26
// })

//     === === === === === === === === === === === === === === =

//     ===
//     === === === === === === === === === === === === === === = -Створити клас який дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
// єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'
// єкт car

// class Car {
//     constructor(model, producer, year, topSpeed, enginVolume, ) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.enginVolume = enginVolume;

//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} км на годину`)
//     }
//     info() {
//         console.log(`model: ${this.model};\n producer: ${this.producer};\n year: ${this.year};\n top speed: ${this.topSpeed};\n engine volume: ${this.enginVolume}`);
//     }
//     increaseMaxSpeed(newSpeed) {
//         console.log(`New top speed: ${this.topSpeed += newSpeed}`);
//     }
//     changeYear(newValue) {
//         console.log(`New prod year: ${this.year += newValue}`);
//     }
//     addDriver(driver) {
//         this.driver = driver
//         console.log(car1);
//     }
// }

// let car1 = new Car('A6', 'Audi', 2016, 250, 280)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(20)
// car1.changeYear(2)
// car1.addDriver({
//     name: 'Kostja',
//     age: 26
// })


//     === === === === === === === === === === === === === === = -======================================
//створити класс попелюшка з полями ім 'я, вік, розмір ноги
//     --Створити 10 попелюшок, покласти їх в масив
//     --Сторити об 'єкт класу "принц" за допомоги класу який має поля ім'
// я, вік, туфелька яку він знайшов.
//     --за допоиоги циклу знайти яка попелюшка повинна бути з принцом ===
//    

// let cindarellas = []



// class Cinderella{
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize
//     }
// }

// class Prince{
//     constructor(name, age, slipperSize){
//         this.name = name;
//         this.age = age;
//         this.slipperSize = slipperSize

//     }
// }

// let alfonso = new Prince('alfonso', 30, 36)

// let Anja = new Cinderella('Anja', 25, 39)
// cindarellas.push(Anja)
// let Olja = new Cinderella('Olja', 22, 38)
// cindarellas.push(Olja)
// let Nastja = new Cinderella('Nastja', 21, 38)
// cindarellas.push(Olja)
// let Ira = new Cinderella('Ira', 18, 40)
// cindarellas.push(Nastja)
// let Oksana = new Cinderella('Oksana', 23, 36)
// cindarellas.push(Oksana)
// let Nadja = new Cinderella('Nadja', 26, 34)
// cindarellas.push(Nadja)
// let Lesja = new Cinderella('Lesja', 30, 34.5)
// cindarellas.push(Lesja)
// let Alla = new Cinderella('Alla', 27, 35.5)
// cindarellas.push(Alla)
// let Lena = new Cinderella('lena', 24, 36.5)
// cindarellas.push(Lena)
// let Julia = new Cinderella('Julia', 20, 37.5)
// cindarellas.push(Julia)
// console.log(cindarellas);

// for (const cindarella of cindarellas) {
    
//     if (cindarella.footSize === alfonso.slipperSize) {
//         console.log(`My sindarella is ${cindarella.name}`);
//     }
// }

//     ===
//     === === === === === === === === === === === === === === = -===================================================

// створити функцію конструктор попелюшка з полями ім 'я, вік, розмір ноги
//     --Створити 10 попелюшок, покласти їх в масив
//     --Сторити об 'єкт типу "принц" за допомоги функції конструктора з полями ім'
// я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//     --функція повинна приймати масив попелюшок, та шукає ту котра йому підходить ===
//     === === === === === === === === === === === === === === =

// let cindarellas = []



// function Cinderella(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize
    
// }

// function Prince(name, age, slipperSize) {
   
//         this.name = name;
//         this.age = age;
//         this.slipperSize = slipperSize    
// }

// let alfonso = new Prince('alfonso', 30, 38)

// let Anja = new Cinderella('Anja', 25, 39)
// cindarellas.push(Anja)
// let Olja = new Cinderella('Olja', 22, 38)
// cindarellas.push(Olja)
// let Nastja = new Cinderella('Nastja', 21, 38)
// cindarellas.push(Olja)
// let Ira = new Cinderella('Ira', 18, 40)
// cindarellas.push(Nastja)
// let Oksana = new Cinderella('Oksana', 23, 36)
// cindarellas.push(Oksana)
// let Nadja = new Cinderella('Nadja', 26, 34)
// cindarellas.push(Nadja)
// let Lesja = new Cinderella('Lesja', 30, 34.5)
// cindarellas.push(Lesja)
// let Alla = new Cinderella('Alla', 27, 35.5)
// cindarellas.push(Alla)
// let Lena = new Cinderella('lena', 24, 36.5)
// cindarellas.push(Lena)
// let Julia = new Cinderella('Julia', 20, 37.5)
// cindarellas.push(Julia)
// console.log(cindarellas);

// for (const cindarella of cindarellas) {

//     if (cindarella.footSize === alfonso.slipperSize) {
//         console.log(`My sindarella is ${cindarella.name}`);
//     }
// }