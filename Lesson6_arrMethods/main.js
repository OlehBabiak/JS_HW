// -создать массив с 20 числами.
//     --при помощи метода sort и колбека отсортировать массив.
//     --при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//     --при помощи filter получить числа кратные 3
//     --при помощи filter получить числа кратные 10
//     --перебрать(проитерировать) массив при помощи foreach()
//     --перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let arr = [20, 14, 33, 15, 98, 2, 56, 78, 14, 6, 254, 1, 99, 44, 71, 31, 28, 34, 65, 19]
// arr.sort((a, b) => a-b)
// console.log(arr);
//==========================================

// arr.sort((a, b) => b - a)
// console.log(arr);
//============================================

// let newArr =arr.filter((num) => num%3 === 0)
// console.log(newArr);
// ===================================================
// let newArr2 =arr.filter((num) => num%10 === 0)
// console.log(newArr2);
//===============================================
// arr.forEach((num) => console.log(num))
//=======================================
// let newArr3 = []
// arr.forEach((num) => newArr3.push(num * 3))
// console.log(newArr3);

//=================================================================

//     создать массив со словами на 15 - 20 элементов.

let arrWords = ['собака', 'кіт', 'морж', 'вихухоль', 'кінь', 'щур', 'ломантин', 'качка', 'лев', 'сорока', 'марс', 'земля', 'кокос', 'жуйка', 'тріцепс', 'прінтер']
// //     --отсортировать его по алфавиту в восходящем порядке.
// let sortArr = arrWords.sort()
// console.log(sortArr);

//===============================

//     --отсортировать его по алфавиту в нисходящем порядке.
// let sortWords2 = arrWords.sort((a, b) => {
// 	if (a-b){return 1} else {return -1}
// })
// console.log(sortWords2)
//======================================================
//     --отфильтровать слова длиной менее 4 х символов
// let newArr = arrWords.filter((word) => word.length < 5)
// console.log(newArr);

//     --перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newArr = arrWords.map((word) => `${word}!`)
// console.log(newArr);


// Все робити через функції масивів(foreach, map...тд)
// Дан масив:
    let users = [{
        name: 'vasya',
        age: 31,
        status: false
    }, {
        name: 'petya',
        age: 30,
        status: true
    }, {
        name: 'kolya',
        age: 29,
        status: true
    }, {
        name: 'olya',
        age: 28,
        status: false
    }, {
        name: 'max',
        age: 30,
        status: true
    }, {
        name: 'anya',
        age: 31,
        status: false
    }, {
        name: 'oleg',
        age: 28,
        status: false
    }, {
        name: 'andrey',
        age: 29,
        status: true
    }, {
        name: 'masha',
        age: 30,
        status: true
    }, {
        name: 'olya',
        age: 31,
        status: false
    }, {
        name: 'max',
        age: 31,
        status: true
    }]; 
//     відсортувати його за віком(зростання, а потім окремо спадання) -

// users.sort((user1, user2) => user1.age - user2.age)
// console.log(users);

// users.sort((user1, user2) => user2.age - user1.age)
// console.log(users);

//=================================================================

//     відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання) -

// users.sort((user1, user2) => user2.name.length - user1.name.length)
// console.log(users);

// users.sort((user1, user2) => user1.name.length - user2.name.length)
// console.log(users);

//==========================================================================
//     пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор

// let newUserArr = users.map((user, id) => {
//     let newUser = user
//     user.id = id
//     return newUser
// })
// console.log(users);
// console.log(newUserArr);

// const usersWithId = users.map((user, index) => {  //????????????????????????/
// 	let newUser = {...user};
// 	newUser.id = index + 1;
// 	return newUser;
// });
// console.log(users);
// console.log(usersWithId);
//(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив(первинний масив залишиться без змін) -
//     відсортувати його за індентифікатором


// newUserArr.sort((newUser1, newUser2) => newUser2.id - newUser1.id)
// console.log(newUserArr);


// --наисать функцию калькулятора с 2 мя числами и колбеком
// --наисать функцию калькулятора с 3 мя числами и колбеком

// function calc(a, b, callback) {
//     return callback(a, b)
// }

// console.log(calc(265, 387, (a, b) => 
//     a + b * a))


    // function calc(a, b, c, callback) {
    //     return callback(a, b, c)
    // }

    // console.log(calc(265, 387, 58, (a, b, c) =>
    //     a + b * c))