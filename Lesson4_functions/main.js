// -створити функцію яка виводить масив
//     -
// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
//====================================================================


//     створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попвередню функцію. -

// let arr = []

// function randomAddFunc() {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random() * 100))
        
//     }
// }
//     randomAddFunc()
//     console.log(arr);

//============================================================================

//     створити функцію яка приймає три числа та виводить та повертає найменьше. -
// let fooMin = function (a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     else if (b < a && b < c) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }

// fooMin(14, 69, 2)

//====================================================================

//     створити функцію яка приймає три числа та виводить та повертає найбільше. -

// let fooMax= function (a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }

// fooMax(14, 69, 2)

//=============================================================================

//     створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше -

// let fooMaxMin = function () {

//     let min = arguments[0]
//     for (const arg of arguments) {
//         if (arg < min) {
//             min=arg
//         }
//     }
    
//      return min
    
// }

// let x = fooMaxMin(8, 2, 15, 99, 21, 34, 55)
// console.log(x);

//========================================================


//     створити функцію яка виводить масив - ДУБЛЬ???

//     створити функцію яка повертає найбільше число з масиву -

// let arr = [8, 2, 15, 99, 21, 34, 55]

// function fooMax(arr) {
//     let x = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             x = arr[i]
//         }
//     }
//     return x
// }
    
//     let maxNumber = fooMax(arr)
//     console.log(maxNumber);


//========================================================================

//     створити функцію яка повертає найменьше число з масиву -  (через жопу)

// let arr = [8, 2, 15, 99, 21, 34, 55]

// function fooMin(arr) {
//     let x = 0
//     for (let i = arr.length - 1; i > 0; i--) {
//         if (arr[i] < arr[i - 1]) {
//             x = arr[i]
//         }
// }
//     return x
// }

// let minNum = fooMin(arr)
// console.log(minNum);

//=======================================================================

    //створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його. -
// let arr = [8, 2, 15, 99, 21, 34, 55]
// function summ(arr) {
//     let sum  = 0
//     for (const number of arr) {
//         sum = sum + number
//     }
//     return sum
// }
// console.log(summ(arr));

//=============================================================

//     створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. -
// let arr = [8, 2, 15, 99, 21, 34, 55]
// function summ(arr) {
//     let sum = 0
//     for (const number of arr) {
//         sum = (sum + number)
//     }
//     let x = sum/arr.length
//     return x
// }
// console.log(summ(arr));

//=================================================================

//     Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об 'єктів в 
//масиві -
// let rules = [
//         				{
//         					title: 'Первое правило Бойцовского клуба.',
//         					body: 'Никому не рассказывать о Бойцовском клубе.'
//         				},
//         				{
//         					title: 'Второе правило Бойцовского клуба.',
//         					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//         				},
//         				{
//         					title: 'Третье правило Бойцовского клуба.',
//         					body: 'В схватке участвуют только двое.'
//         				},
//         				{
//         					title: 'Четвертое правило Бойцовского клуба.',
//         					body: 'Не более одного поединка за один раз.'
//         				},
//         				{
//         					title: 'Пятое правило Бойцовского клуба.',
//         					body: 'Бойцы сражаются без обуви и голые по пояс.'
//         				},
//         				{
//         					title: 'Шестое правило Бойцовского клуба.',
//         					body: 'Поединок продолжается столько, сколько потребуется.'
//         				},
//         				{
//         					title: 'Седьмое правило Бойцовского клуба.',
//         					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//         				},
//         				{
//         					title: 'Восьмое и последнее правило Бойцовского клуба.',
//         					body: 'Новичок обязан принять бой.'
//         				},

//                     ];
                    
//     function numberOfObjects(rules) {
//         let number = rules.length
//         return number
//     }
//     console.log(numberOfObjects(rules));

//==============================================================

//     Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них -
// let rules = [
//         				{
//         					title: 'Первое правило Бойцовского клуба.',
//         					body: 'Никому не рассказывать о Бойцовском клубе.'
//         				},
//         				{
//         					title: 'Второе правило Бойцовского клуба.',
//         					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//         				},
//         				{
//         					title: 'Третье правило Бойцовского клуба.',
//         					body: 'В схватке участвуют только двое.'
//         				},
//         				{
//         					title: 'Четвертое правило Бойцовского клуба.',
//         					body: 'Не более одного поединка за один раз.'
//         				},
//         				{
//         					title: 'Пятое правило Бойцовского клуба.',
//         					body: 'Бойцы сражаются без обуви и голые по пояс.'
//         				},
//         				{
//         					title: 'Шестое правило Бойцовского клуба.',
//         					body: 'Поединок продолжается столько, сколько потребуется.'
//         				},
//         				{
//         					title: 'Седьмое правило Бойцовского клуба.',
//         					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//         				},
//         				{
//         					title: 'Восьмое и последнее правило Бойцовского клуба.',
//         					body: 'Новичок обязан принять бой.'
//         				},

//                     ];

//     function numberOfObjects(rules) {
//         let fieldArr = []

//         for (const rule of rules) {
//             for (const key in rule) {
//             fieldArr.push(key)
                    
//                 }
//             }
//             return fieldArr.length
//         }
    
//     console.log(numberOfObjects(rules));

//======================================================

//     створити функцію яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
// Приклад
//     [1, 2, 3, 4]
//     [2, 3, 4, 5]
// результат
//     [3, 5, 7, 9] -

// let arr1 = [1, 2, 3, 4, 9]
// let arr2 = [2, 3, 4, 5, 2]
// function someFunction(arr1, arr2) {
//     let arrSumm = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j) {
//                 let x = arr1[i] + arr2[j]
//                 arrSumm.push(x)
//             }
//         }
//     }
//     return arrSumm
// }
// console.log(someFunction(arr1, arr2));



//     ** * приймає масив та число "i", та міняє місцями об `єкт який знаходиться в індексі "i" на "i+1"


//???????????????????????????????

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// let arr = [0, 0, 1, 0]
// let arr2 = []
// let arr3 = []

// function someFunc(arr) {
// for (const num of arr) {
//     if (num!=0) {
//         arr2.push(num)
//     }else{arr3.push(num)}
// }
// for (const num2 of arr3) {
//     arr2.push(num2)
// }
// return arr2
// }
// console.log(someFunc(arr));

// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

//=============================================================

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function addGreet(txt) {
//     let h1 = document.createElement('h1')
//     h1.innerText = txt
//     document.body.appendChild(h1)
// }
// addGreet('Hello owu')

//======================================================================

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addGreet(txt, typeOfelement) {
//     let type = document.createElement(typeOfelement)
//     type.innerText = txt
//     document.body.appendChild(type)
// }
// addGreet('Hello owu', 'h1')

//========================================================================

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let cars = [{
//         id: 111,
//         model: 'A200',
//         producer: 'Mercedes',
//         tankVolume: 60,
//         horsePower: 280,
//         image: '../Practice3/imgs/2018_Mercedes-Benz_A200_AMG_Line_Premium+_1.3_Front.jpg'
//     },

//     {
//         id: 222,
//         model: 'Fusion',
//         producer: 'Ford',
//         tankVolume: 62,
//         horsePower: 240,
//         image: '../Practice3/imgs/2019_Ford_Fusion_SEL_1.5L,_front_9.8.19.jpg'
//     },

//     {
//         id: 333,
//         model: 'A6',
//         producer: 'Audi',
//         tankVolume: 65,
//         horsePower: 220,
//         image: '../Practice3/imgs/audi-a6-avant-tfsie-quattro-2020.jpg'
//     },

//     {
//         id: 444,
//         model: 'Sonata',
//         producer: 'Hyundai',
//         tankVolume: 60,
//         horsePower: 160,
//         image: '../Practice3/imgs/hyundai-550x300.jpg'
//     },

//     {
//         id: 555,
//         model: 'Optima',
//         producer: 'KIA',
//         tankVolume: 58,
//         horsePower: 175,
//         image: '../Practice3/imgs/kia_optima.jpg'
//     },

//     {
//         id: 666,
//         model: 'Accord',
//         producer: 'Honda',
//         tankVolume: 64,
//         horsePower: 180,
//         image: '../Practice3/imgs/maxresdefault.jpg'
//     },

//     {
//         id: 777,
//         model: '6',
//         producer: 'Mazda',
//         tankVolume: 64,
//         horsePower: 180,
//         image: '../Practice3/imgs/mazda-6-front2.jpg'
//     },

//     {
//         id: 888,
//         model: 'Talisman',
//         producer: 'Renault',
//         tankVolume: 58,
//         horsePower: 130,
//         image: '../Practice3/imgs/renault-talisman-lead-image.jpg'
//     },

//     {
//         id: 999,
//         model: 'C5',
//         producer: 'Citroen',
//         tankVolume: 55,
//         horsePower: 160,
//         image: '../Practice3/imgs/unnamed.jpg'
//     },

//     {
//         id: 1212,
//         model: 'Impreza',
//         producer: 'Subaru',
//         tankVolume: 58,
//         horsePower: 270,
//         image: '../Practice3/imgs/завантаження.jpg'
//     }
// ]
// function addCars(cars, type) {
    
//     for (const car of cars) {
//         let carDiv = document.createElement(type)
//         carDiv.innerText = `producer: ${car.producer} \n model: ${car.model} \n tank volume: ${car.tankVolume} \n horse power:${car.horsePower} \n ---`
//         document.body.appendChild(carDiv)
//     }
    
// }
// addCars(cars, 'div')

//=============================================================

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let cars = [{
//         id: 111,
//         model: 'A200',
//         producer: 'Mercedes',
//         tankVolume: 60,
//         horsePower: 280,
//         image: '../Practice3/imgs/2018_Mercedes-Benz_A200_AMG_Line_Premium+_1.3_Front.jpg'
//     },

//     {
//         id: 222,
//         model: 'Fusion',
//         producer: 'Ford',
//         tankVolume: 62,
//         horsePower: 240,
//         image: '../Practice3/imgs/2019_Ford_Fusion_SEL_1.5L,_front_9.8.19.jpg'
//     },

//     {
//         id: 333,
//         model: 'A6',
//         producer: 'Audi',
//         tankVolume: 65,
//         horsePower: 220,
//         image: '../Practice3/imgs/audi-a6-avant-tfsie-quattro-2020.jpg'
//     },

//     {
//         id: 444,
//         model: 'Sonata',
//         producer: 'Hyundai',
//         tankVolume: 60,
//         horsePower: 160,
//         image: '../Practice3/imgs/hyundai-550x300.jpg'
//     },

//     {
//         id: 555,
//         model: 'Optima',
//         producer: 'KIA',
//         tankVolume: 58,
//         horsePower: 175,
//         image: '../Practice3/imgs/kia_optima.jpg'
//     },

//     {
//         id: 666,
//         model: 'Accord',
//         producer: 'Honda',
//         tankVolume: 64,
//         horsePower: 180,
//         image: '../Practice3/imgs/maxresdefault.jpg'
//     },

//     {
//         id: 777,
//         model: '6',
//         producer: 'Mazda',
//         tankVolume: 64,
//         horsePower: 180,
//         image: '../Practice3/imgs/mazda-6-front2.jpg'
//     },

//     {
//         id: 888,
//         model: 'Talisman',
//         producer: 'Renault',
//         tankVolume: 58,
//         horsePower: 130,
//         image: '../Practice3/imgs/renault-talisman-lead-image.jpg'
//     },

//     {
//         id: 999,
//         model: 'C5',
//         producer: 'Citroen',
//         tankVolume: 55,
//         horsePower: 160,
//         image: '../Practice3/imgs/unnamed.jpg'
//     },

//     {
//         id: 1212,
//         model: 'Impreza',
//         producer: 'Subaru',
//         tankVolume: 58,
//         horsePower: 270,
//         image: '../Practice3/imgs/завантаження.jpg'
//     }
// ]

// function addCars(cars, carElement, typeOfelement1, typeOfelement2, typeOfelement3) {
    
//     for (const car of cars) {
//         let carDiv = document.createElement(carElement)
          
//              let producer = document.createElement(typeOfelement1)
//              producer.innerText = car.producer
//              carDiv.appendChild(producer)
    
//              let model = document.createElement(typeOfelement2)
//              model.innerText = car.model
//              carDiv.appendChild(model)
    
    
    
//              let tankVol = document.createElement(typeOfelement3)
//              tankVol.innerText = car.tankVolume
//              carDiv.appendChild(tankVol)
    
//              let horsePow = document.createElement(typeOfelement3)
//              horsePow.innerText = car.horsePower
//              carDiv.appendChild(horsePow)
    
//           document.body.appendChild(carDiv)
//     }
    
// }
// addCars(cars, 'div', 'h1', 'h2', 'p')

//=============================================================

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = 
// [{id: 1, name: 'vasya', age: 31, status: false}, 
// {id: 2, name: 'petya', age: 30, status: true}, 
// {id: 3, name: 'kolya', age: 29, status: true}, 
// {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = 
// [{user_id: 3, country: 'USA', city: 'Portland'}, 
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
// {user_id: 2, country: 'Poland', city: 'Krakow'}, 
// {user_id: 4, country: 'USA', city: 'Miami'},];


// let addUserWithSity = function (arg1, arg2) {
//     for (const user of usersWithId) {
//         for (const city of citiesWithId) {
//             if (user.id === city.user_id) {
//                 user.country = city.country
//                 user.city = city.city
//             }
//         }
//     }
//     return usersWithId
// }
// console.log(addUserWithSity(usersWithId, citiesWithId));


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];

function rulesfunc(arg) {
    let contentDiv = document.createElement('div')
    contentDiv.classList.add('content')
    for (const rule of arg) {
        let h1 = document.createElement('h1')
        h1.innerText = rule.body
        contentDiv.appendChild(h1)

        let ruleContent = document.createElement('div')
        ruleContent.innerText = rule.title
        contentDiv.appendChild(ruleContent)
    }

    document.body.appendChild(contentDiv)


}
rulesfunc(rules)


// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
