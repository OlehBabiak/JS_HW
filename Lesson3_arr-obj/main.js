// 1. -создать 5 объектов.В каждом объекте не менее 3 х полей.Все объекты разные по набору полей.
//(Т.е поле name должно присутствовать только 1 раз в одном объекте) -

// let car = {
//     producer: 'Ford',
//     model: 'fusion',
//     year: 2016,
//     hp: 240,
//     color: 'white'
// }


//  for (let keys in car) {
//      console.log(keys);
//  }
//  console.log(Object.keys(car))

//  let carJSON = JSON.stringify(car)
//  console.log(carJSON);
//  console.log(JSON.parse(carJSON));
// //-----------------------------------
// let person = {
//     name: 'Kolyan',
//     age: 34,
//     isMarried: true,
//     height: 180
// }

//  for (let keys in person) {
//      console.log(keys);
//  }
//  console.log(Object.keys(person))
//  let personJSON = JSON.stringify(person)
//  console.log(personJSON);
//  console.log(JSON.parse(personJSON));
// //---------------------------------------
// let dog =  {
//     breed: 'terrier',
//     paws: 4,
//     wool: 'grey',
//     born: 2018
// }

//  for (let keys in dog) {
//      console.log(keys);
//  }
//  console.log(Object.keys(dog))

//  let dogJSON = JSON.stringify(dog)
//  console.log(dogJSON);
//  console.log(JSON.parse(dogJSON));
// //------------------------------------
// let phone = {
//     bluetooth: true,
//     acc: 'Li-Ion, 1960 мАh',
//     weight: 128,
//     CPU: 'Apple A10 Fusion'
// }

//  for (let keys in phone) {
//      console.log(keys);
//  }
//  console.log(Object.keys(phone))
//  let phoneJSON = JSON.stringify(phone)
//  console.log(phoneJSON);
//  console.log(JSON.parse(phoneJSON));
// //---------------------------------------
// let programmer = {
//     language: 'Java Script',
//     company: 'Epam',
//     salary: 2000
// }

//  for (let keys in programmer) {
//      console.log(keys);
//  }
//  console.log(Object.keys(programmer))
// let programmerJSON = JSON.stringify(programmer)
// console.log(programmerJSON);
// console.log(JSON.parse(programmerJSON));
//=============================================================================================

//2. создать 5 объектов с полностью разным набором полей.В каждом объекте должен присутсвовать массив и внутренний объект.
//Опишите что угодно, машину, картину, болт...Пример: let man = {
//         name: 'kokos',
//         skills: ['java', 'js'],
//         wife: {
//             name: 'cherry'
//         }
//     }; -

// При помощи
// for in вывести все ключи всех объектов из задания 1 и 2
//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2 -

// let objHouse = {
//      street: 'Horodocka',
//      number: 137,
//      floors: 2,
//      roof: 'brown',
//      facade: ['white', 'brown'],
//      describe: {rooms: 5, area: 250, bathrooms: 3}
//  };
//  for (let keys in objHouse) {
//   console.log(keys);
// }
// console.log(Object.keys(objHouse))
// //-----------------------------------------------
//  let objDriver = {
//      bus: 'Etalon',
//      route: 41,
//      routeLength: 21,
//      routeTime: 1.36,
//      dayOff: ['sunday', 'saturday'],
//      describe: {name: 'Petro', age: 48, height: 176}
//  };
// for (let keys in objDriver) {
//     console.log(keys);
// }
// console.log(Object.keys(objDriver))
// //------------------------------------------------
//  let objToy = {
//      forAge: 3,
//      brand: 'Peppa',
//      model: 'peppaPig',
//      size: ['Big', 'Medium', 'Small'],
//      price: 5,
//      describe: {color: 'pink', talk: 'No'}
//  };
// for (let keys in objToy)
// {
//     console.log(keys);
// }
// console.log(Object.keys(objToy))
// //------------------------------------------------------------

//   3.  Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
//(Значаения полей могу быть выдуманными) -
// let cars = [{
//         model: 'A200',
//         issue: 2015,
//         color: 'white',
//         horsePower: 280,
//     },

//     {
//         model: 'Fusion',
//         issue: 2017,        
//         color: 'red',
//         horsePower: 240,
//     },

//     {
//         model: 'A6',
//         issue: 2013,        
//         color: 'blue',
//         horsePower: 220,
//     },

//     {
//         model: 'Sonata',
//         issue: 2017,
//         color: 'yellow',
//         horsePower: 160,
//     },

//     {
//         model: 'Optima',
//         issue: 2011,       
//         color: 'silver',
//         horsePower: 175,
//     },

//     {
//         model: 'Accord',
//         issue: 2010,
//         color: 'black',
//         horsePower: 180,
//     },

//     {
//         model: '6',
//         issue: 2009,
//         color: 'grey',
//         horsePower: 180,
//     },

//     {
//         model: 'Talisman',
//         issue: 2013,
//         color: 'green',
//         horsePower: 130,
//     },

//     {
//         model: 'C5',
//         issue: 2011,
//         color: 'brown',
//         horsePower: 160,
//     },

//     {
//         model: 'Impreza',
//         issue: 2018,
//         color: 'violet',
//         horsePower: 270,
//     }
// ]

// let i = 0;
// while (i < cars.length) { // выводит 0, затем 1, затем 2
//     alert(i);
//     i++;
// }

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i].model);

// }

// for (const car of cars) {
//     console.log(JSON.stringify(car));
// }

// //    4. Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// //(Значаения полей могу быть выдуманными) -

// let cities = [
//     {
//         name: 'Lviv',
//         population: 1500,
//         country: 'Ukraine',
//         region: 'west'
//     },

//     {
//         name: 'Kyiv',
//         population: 3500,
//         country: 'Ukraine',
//         region: 'center'
//     },

//     {
//         name: 'Gdansk',
//         population: 1700,
//         country: 'Poland',
//         region: 'North'
//     },

//     {
//         name: 'Berlin',
//         population: 3600,
//         country: 'Germany',
//         region: 'center'
//     },

//     {
//         name: 'New York',
//         population: 4500,
//         country: 'USA',
//         region: 'East'
//     }    
// ]

// let i = 0;
// while (i < cities.length) { // выводит 0, затем 1, затем 2
//     alert(i);
//     i++;
// }

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i].population);

// }

// for (const city of cities) {
//     console.log(JSON.stringify(city));
// }

//============================================================================================

// //   5.  Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// //Водитель является отдельным объектом с полями имя, возраст, пол, стаж. -

// let cars = [{
//         model: 'A200',
//         issue: 2015,
//         color: 'white',
//         horsePower: 280,
//         driver: {
//             name: 'Vasia',
//             age: 32,
//             gender: 'male',
//             experience: 13
//         }
//     },

//     {
//         model: 'Fusion',
//         issue: 2017,
//         color: 'red',
//         horsePower: 240,
//         driver: {
//             name: 'Natan',
//             age: 33,
//             gender: 'male',
//             experience: 14
//         }
//     },

//     {
//         model: 'A6',
//         issue: 2013,
//         color: 'blue',
//         horsePower: 220,
//         driver: {
//             name: 'Anya',
//             age: 21,
//             gender: 'female',
//             experience: 1
//         }
//     },

//     {
//         model: 'Sonata',
//         issue: 2017,
//         color: 'yellow',
//         horsePower: 160,
//         driver: {
//             name: 'Ihor',
//             age: 27,
//             gender: 'male',
//             experience: 8
//         }
//     },

//     {
//         model: 'Optima',
//         issue: 2011,
//         color: 'silver',
//         horsePower: 175,
//         driver: {
//             name: 'Nadya',
//             age: 32,
//             gender: 'female',
//             experience: 6
//         }
//     },

//     {
//         model: 'Accord',
//         issue: 2010,
//         color: 'black',
//         horsePower: 180,
//         driver: {
//             name: 'Roman',
//             age: 32,
//             gender: 'male',
//             experience: 12
//         }
//     },

//     {
//         model: '6',
//         issue: 2009,
//         color: 'grey',
//         horsePower: 180,
//         driver: {
//             name: 'Kostya',
//             age: 42,
//             gender: 'male',
//             experience: 20
//         }
//     },

//     {
//         model: 'Talisman',
//         issue: 2013,
//         color: 'green',
//         horsePower: 130,
//         driver: {
//             name: 'Olya',
//             age: 26,
//             gender: 'female',
//             experience: 4
//         }
//     },

//     {
//         model: 'C5',
//         issue: 2011,
//         color: 'brown',
//         horsePower: 160,
//         driver: {
//             name: 'Max',
//             age: 28,
//             gender: 'male',
//             experience: 3
//         }
//     },

//     {
//         model: 'Impreza',
//         issue: 2018,
//         color: 'violet',
//         horsePower: 270,
//         driver: {
//             name: 'Oleh',
//             age: 32,
//             gender: 'male',
//             experience: 5
//         }
//     }
// ]


// let i = 0;
// while (i < cars.length) { // выводит 0, затем 1, затем 2
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i].driver.name);

// }
// let newCarArr = []
// for (const car of cars) {
//     let carJSON = JSON.stringify(car);
//     newCarArr.push(carJSON)
// }
// console.log(newCarArr);

// //     проитерировать каждый массив из задания 5, 6, 7 при помощи  (++)
// // while. -

// проитерировать каждый массив из задания 5, 6, 7 при помощи  (++)
// for. -
// проитерировать каждый массив из задания 5, 6, 7 при помощи  (++)
// for of . -
//     взять объекты из задания 1 и превратить каждый в json. -  (++)
//     взять json из задания 1 и превратить их обратно в объекты. -  (++)
//     взять массив из задания 5, в цикле перебрать его объекты превратив их в json. - (++)
//     взять массив из задания 6, в цикле перебрать его объекты превратив их в json. -(++)
//     взять массив из задания 7, в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив. - (++)

//===============================================================================
//     Создать массив пользователей.У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills -
// let users = [
//     {
//         name: 'Ania',
//         age: 23,
//         city: 'Lviv',
//         skills: ['Communication', 'Leadership', 'HTML', 'CSS']
//     },
//        {
//            name: 'Anton',
//            age: 36,
//            city: 'Dnipro',
//            skills: ['Interpersonal skills', 'Management skills', 'React', 'Vue']
//        },
//        {
//            name: 'Oleh',
//            age: 39,
//            city: 'Lviv',
//            skills: ['Problem-solving', 'Time management', 'Java Script', 'NodeJS']
//        },
//         {
//             name: 'Vitalij',
//             age: 26,
//             city: 'Kyiv',
//             skills: ['Active listening', 'Interpersonal skills', 'PHP', 'Java']
//         }
// ]
// let allSkillsArr = []
// for (const user of users) {
//     for (const skills of user.skills) {
//         allSkillsArr.push(skills)
//     }
// }
// console.log(allSkillsArr);

//     Создать массив пользователей.У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.  (дубль)
// Скопировать все skills всех пользователей в отедльный массив (++)

//========================================================

// За допомогою 2 х циклів циклів проітеррувати даний масив і масив кожного об 'єкта.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     skills: ['java', 'js']
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: ['java', 'js', 'html']
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     skills: ['mysql', ',mongo']
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: ['java', 'js']
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     skills: ['mysql', ',mongo']
// }];

// for (const user of users) {
//         for (const skills of user.skills) {
//             console.log(skills);
//         }
//     }

//===========================================================

//     За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
//розділивши всі властивості по своїм блокам(div > div * 4) -
//     За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
//розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         country: 'Ukraine',
//         street: 'Shevchenko',
//         houseNumber: 1
//     }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {
//         city: 'New York',
//         country: 'USA',
//         street: 'East str',
//         houseNumber: 21
//     }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Budapest',
//         country: 'Hungary',
//         street: 'Kuraku',
//         houseNumber: 78
//     }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Prague',
//         country: 'Czech',
//         street: 'Paster',
//         houseNumber: 56
//     }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Istanbul',
//         country: 'Turkey',
//         street: 'Mikar',
//         houseNumber: 39
//     }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Rio',
//         country: 'Brasil',
//         street: 'Ronaldi',
//         houseNumber: 5
//     }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Montreal',
//         country: 'Canada',
//         street: 'Acusto',
//         houseNumber: 90
//     }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Quebeck',
//         country: 'Canada',
//         street: 'Binaro',
//         houseNumber: 33
//     }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Moscow',
//         country: 'Russia',
//         street: 'Gogolia',
//         houseNumber: 1
//     }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Portland',
//         country: 'USA',
//         street: 'Forest str',
//         houseNumber: 4
//     }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {
//         city: 'Cairo',
//         country: 'Egypt',
//         street: 'Seashore',
//         houseNumber: 45
//     }
// }];

//    -З масиву users за допомогою циклу витягнути адреси користувачів і записати(скопіювати) їх в інший порожній масив. -

// let usersAdresses = []
// for (const user of users) {
//     usersAdresses.push(user.address);
// }
// console.log(usersAdresses);

//==============================================================

//     За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//Всі данні в одному блоці. -


// for (const user of users) {

// let userDiv = document.createElement('div')
// userDiv.innerText = `name: ${user.name} \n age: ${user.age} \n status: ${user.status} \n address: \n city: ${user.address.city} \n country: ${user.address.country} \n street: ${user.address.street} \n houseNumber: ${user.address.houseNumber}`
// userDiv.classList.add('user')
//  document.body.appendChild(userDiv)
// }

//================================================

//     За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
//розділивши всі властивості по своїм блокам(div > div * 4)
// for (const user of users) {

//     let userDiv = document.createElement('div')
//     let name = document.createElement('p')
//     name.innerText = `name: ${user.name}`
//     name.classList.add('user-prop')
//     userDiv.appendChild(name)

//     let age = document.createElement('p')
//     age.innerText = `age: ${user.age}`
//     age.classList.add('user-prop')
//     userDiv.appendChild(age)

//     let status = document.createElement('p')
//     status.innerText = `status: ${user.status}`
//     status.classList.add('user-prop')
//     userDiv.appendChild(status)

//     let city = document.createElement('p')
//     city.innerText = `city: ${user.address.city}`
//     city.classList.add('user-prop')
//     userDiv.appendChild(city)

//     let country = document.createElement('p')
//     country.innerText = `country: ${user.address.country}`
//     country.classList.add('user-prop')
//     userDiv.appendChild(country)

//     let street = document.createElement('p')
//     street.innerText = `street: ${user.address.street}`
//     street.classList.add('user-prop')
//     userDiv.appendChild(street)

//     let houseNumber = document.createElement('p')
//     houseNumber.innerText = `houseNumber: ${user.address.houseNumber}`
//     houseNumber.classList.add('user-prop')
//     userDiv.appendChild(houseNumber)

//     userDiv.classList.add('user')
//     document.body.appendChild(userDiv)
// }
//===============================================

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {

//     let userDiv = document.createElement('div')
//     let name = document.createElement('p')
//     name.innerText = `name: ${user.name}`
//     name.classList.add('user-prop')
//     userDiv.appendChild(name)

//     let age = document.createElement('p')
//     age.innerText = `age: ${user.age}`
//     age.classList.add('user-prop')
//     userDiv.appendChild(age)

//     let status = document.createElement('p')
//     status.innerText = `status: ${user.status}`
//     status.classList.add('user-prop')
//     userDiv.appendChild(status)
//     //-------------------------
//     let userAdress = document.createElement('p');

//     userAdress.classList.add('user-adress')
//     userDiv.appendChild(userAdress);

//     for (let key in user.address) {
//         let city = document.createElement('p');

//         city.innerText = `${key}: ${user.address[key]}`;
//         city.classList.add('user-prop-city');
//         userAdress.appendChild(city);
//         console.log(key)
//     }

//     userDiv.classList.add('user')
//     document.body.appendChild(userDiv)

// }
