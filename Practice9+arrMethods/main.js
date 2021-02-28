// let cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
// }, {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
// }, {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
// }, {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
// }, {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
// }, {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165
// }, {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350
// }, {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400
// }, {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230
// }];
// Відфільтрувати масив за наступними крітеріями:
//     -двигун більше 3 х літрів -
// let newCarArr = cars.filter((car) => car.volume > 2)
// console.log(newCarArr);
//=================================================
//     двигун = 2 л -
// let newCarArr = cars.filter((car) => car.volume === 2)
// console.log(newCarArr);
//======================================
//     виробник мерс -
// let newCarArr = cars.filter((car) => car.producer === 'mercedes')
// console.log(newCarArr);
//===========================================
//     двигун більше 3 х літрів + виробник мерседес -
// let newCarArr = cars.filter((car) => car.volume > 3 && car.producer === 'mercedes')
// console.log(newCarArr);
//===============================================================
//     двигун більше 3 х літрів + виробник субару -
// let newCarArr = cars.filter((car) => car.volume > 3 && car.producer === 'subaru')
// console.log(newCarArr);
//===========================================
//     сили більше ніж 300 -
// let newCarArr = cars.filter((car) => car.power > 300)
// console.log(newCarArr);
//=========================================
//     сили більше ніж 300 + виробник субару -
// let newCarArr = cars.filter((car) => car.power > 300 && car.producer === 'subaru')
// console.log(newCarArr);


//     мотор серіі ej -
// let newCarArr = cars.filter((car) => car.engine.startsWith('ej'))
// console.log(newCarArr);

//=================================================

//     сили більше ніж 300 + виробник субару + мотор серіі ej -

// let newCarArr = cars.filter((car) => car.producer === 'subaru' && car.engine.startsWith('ej'))
// console.log(newCarArr);
//=========================================================
//     двигун меньше 3 х літрів + виробник мерседес -
// let newCarArr = cars.filter((car) => car.volume < 3 && car.producer === 'mercedes')
// console.log(newCarArr);
//========================================================
//     двигун більше 2 л + сили більше 250 -
// let newCarArr = cars.filter((car) => car.volume > 2 && car.power > 250)
// console.log(newCarArr);
//==================================================
//     сили більше 250 + виробник бмв
// let newCarArr = cars.filter((car) => car.power > 250 && car.producer === 'bmw')
// console.log(newCarArr);


//===============================================================================================================
    
    // взять слдующий массив
// let usersWithAddress = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 16
//     }
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 1
//     }
// }, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 121
//     }
// }, {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 90
//     }
// }, {
//     id: 5,
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 115
//     }
// }, {
//     id: 6,
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 2
//     }
// }, {
//     id: 7,
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 22
//     }
// }, {
//     id: 8,
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 43
//     }
// }, {
//     id: 9,
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 12
//     }
// }, {
//     id: 10,
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 16
//     }
// }, {
//     id: 11,
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenko',
//         number: 121
//     }
// }];
// --отсортировать его по id пользователей
// usersWithAddress.sort((a, b) => a.id - b.id)
// console.log(usersWithAddress);

//=================================================================
// --отсортировать его по id пользователей в обратном опрядке

// usersWithAddress.sort((a, b) => b.id - a.id)
// console.log(usersWithAddress);
//============================================================
// --отсортировать его по возрасту пользователей

// usersWithAddress.sort((a, b) => a.age - b.age)
// console.log(usersWithAddress);
//==========================================================
// --отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a, b) => b.age - a.age)
// console.log(usersWithAddress);
//=================================================
// --отсортировать его по имени пользователей
// let sortUsersWithAddress = usersWithAddress.sort((a, b) => {
//             if (a.name > b.name) {
//                 return 1
//             } else {
//                 return -1
//             }
// })
// console.log(sortUsersWithAddress);
//========================================
// --отсортировать его по имени пользователей в обратном порядке
// let sortUsersWithAddress = usersWithAddress.sort((a, b) => {
//     if (b.name > a.name) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sortUsersWithAddress);
//===============================================
// --отсортировать его по названию улицы в алфавитном порядке
// let sortUsersWithAddress = usersWithAddress.sort((a, b) => {
//     if (b.address.street > a.address.street) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sortUsersWithAddress);
//==========================================================
// --отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a, b) => 
//     a.address.number - b.address.number
//  )
// console.log(usersWithAddress);
//==============================================================
// --отфильтровать(оставить) тех кто младше 30
// let sortUsersWithAddress = usersWithAddress.filter((user) => user.age < 30)
// console.log(sortUsersWithAddress);
//======================================================
//     --отфильтровать(оставить) тех у кого отрицательный статус
// let sortUsersWithAddress = usersWithAddress.filter((user) => user.status === false)
// console.log(sortUsersWithAddress);
//==============================================
//     --отфильтровать(оставить) тех у кого отрицательный статус и младше 30 лет
// let sortUsersWithAddress = usersWithAddress.filter((user) => 
// user.status === false && user.age < 30)
// console.log(sortUsersWithAddress);
//===============================================================
//     --отфильтровать(оставить) тех у кого номер дома четный
// let sortUsersWithAddress = usersWithAddress.filter((user) =>
//     user.address.number % 2 === 0)
// console.log(sortUsersWithAddress);


// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10 % (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв(переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно bрати кожну другу машинку(цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10 % та ціну на 5 %


// let cars = [{
//     producer: "subaru",
//     power: 400,
//     owner: {name: 'Oleh', age: 40, exp: 4},
//     price: 8000,
//     year: 2010,
// }, 
// {
//     producer: "ford",
//     power: 240,
//     owner: {
//         name: 'Nazar',
//         age: 36,
//         exp: 12
//     },
//     price: 12000,
//     year: 2015,
// },
// {
//     producer: "honda",
//     power: 150,
//     owner: {
//         name: 'Petro',
//         age: 25,
//         exp: 3
//     },
//     price: 6800,
//     year: 2012,
// },
// {
//     producer: "audi",
//     power: 180,
//     owner: {
//         name: 'Jura',
//         age: 32,
//         exp: 13
//     },
//     price: 9800,
//     year: 2011,
// },
// {
//     producer: "porcshe",
//     power: 320,
//     owner: {
//         name: 'Ihor',
//         age: 38,
//         exp: 14
//     },
//     price: 21000,
//     year: 2012,
// },
// {
//     producer: "mercedes",
//     power: 220,
//     owner: {
//         name: 'Andrij',
//         age: 34,
//         exp: 9
//     },
//     price: 13000,
//     year: 2009,
// },
// {
//     producer: "volvo",
//     power: 160,
//     owner: {name: 'Roman', age: 33, exp: 7},
//     price: 11000,
//     year: 2013,
// }
// ];
// let newDrivers = ['John', 'Pol', 'Havier', 'Salvadore', 'Enrice', 'Carabas']


// method #1
// cars.forEach((car, index) => {
//     if (index % 2 === 0) {
//         car.power *= 1.1
//         car.price *= 1.05
//         car.owner.name = newDrivers[index]
//     }
// })


//method#2
// for(let i = 0; i < cars.length; i+= 2) {
// 	cars[i].power *= 1.1;
// 	cars[i].price *= 1.05;
//     cars[i].owner = newDrivers[i];
	
// }
// console.log(cars);

//     Після того зробити перевірку досвіду ВСІХ наших водіїв.Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси 
//підвищення кваліфікації, що збільшить йому досвід на 1 рік.  Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// cars.forEach((car) => {
//     if (car.owner.exp < 5 && car.owner.age > 25) {
//         console.log(`${car.owner.name}, yo must go to courses!`);
//         car.owner.exp +=1
//     }
// })
// console.log(cars);

// let carSum = cars.reduce((acc, currentValue) => acc + currentValue.price, 0)
// console.log(carSum);

//=========================================================================================================

// Задача: дан отсортированный по возрастанию массив целых чисел.Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr— массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.Если такого элемента нет в массиве, выведите - 1.

// Пример:
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

// // let MinIndex = 0;
// // let MaxIndex = 0;

// function finderIndex(number, arr) {
// 	let minIndex = arr.indexOf(number)
// 	let maxIndex = arr.lastIndexOf(number)

// 	console.log(`Min Index: ${minIndex}`)
// 	console.log(`Max Index: ${maxIndex}`)
// }
// finder(5, arr)
// finder(4, arr)

