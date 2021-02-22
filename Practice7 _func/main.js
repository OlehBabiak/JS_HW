// 1) создать функцию которая принимает массив и возвращает строку([1, 2, 3, 4, 5, 6] - > "123456")
// let arr = [1, 2, 3, 4, 5, 6]

// function convertArr(arg) {
//     let str = arg.toString()
//     return str
// }

// function convertArr2(arg) {
//     let str = arg.join()
//     return str
// }

// console.log(convertArr(arr));
// console.log(convertArr2(arr));

// 2) создать функцию которая принимает массив чисел и возвращает этот же массив,
// но каждый его элемент больше на 1([5, 2, 3] - > [6, 3, 4])
// let arr = [5, 2, 3]

// function increaseFunc(arr) {

// for (let i = 0; i < arr.length; i++) {
    
//     arr[i]+=1
// }
//     return arr
// }


// console.log(increaseFunc(arr));

// 3) создать функцию которая принимает число n, min, max
// и возвращает массив длиной n с случайными числами в диапазоне от min до max

// let arr = []
// function randomFunc(n, min, max) {
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return arr
// }
// randomFunc(10, 5, 90)
// console.log(arr);




//4)  создать функцию которая принимает age и массив  (массив ниже или придумайте свой)
// и возвращает новый массив с теми юзерами которые совпадают по возрасту
// const users = [
// {id: 1, name: 'vasya', age: 31, status: false},
// {id: 2, name: 'petya', age: 30, status: true},
// {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 30, status: false},
// {id: 4, name: 'kira', age: 29, status: false},
// {id: 4, name: 'marta', age: 30, status: false},
// ];
// // Пример:
// // someFunc(30, users) -> [
// //     {id: 2, name: 'petya', age: 30, status: true},
// //     {id: 4, name: 'olya', age: 30, status: false},
// //     {id: 4, name: 'marta', age: 30, status: false},
// // ]

// let someFunc = (age, arr) => {
//     let newUsersArr = []
// for (const user of arr) {
//     if (user.age === age) {
//         newUsersArr.push(user)
//     }
// }
// return newUsersArr
// }
// console.log(someFunc(30, users));
