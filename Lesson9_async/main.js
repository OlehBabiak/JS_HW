// setTimeout(() => {
//     console.log('H');
//     setTimeout(() => {
//         console.log('e');
//         setTimeout(() => {
//             console.log('l');
//             setTimeout(() => {
//                 console.log('l');
//                 setTimeout(() => {
//                     console.log('o');
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// -Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
//     H(затримка 0.6)
// e(затримка 0.1)
// l(затримка 0.3)
// l(затримка 0.7)
// о(затримка 1)




// const text = 'Hello world!'
// let arr2 = text.split('')

//   let count = 0;
//   let string = '';
 
//   function typeLine(cb) {
//     let interval = setTimeout(
//       () => {
//         string += text[count]
//         console.log(string);
//         document.querySelector('pre').innerHTML =string +'|';

//       count++;
//       console.log(count);

//         if (count == text.length) {
//           clearTimeout(interval);
//            document.querySelector('pre').innerHTML =string;
//           return true;
//         }
      
//       typeLine(delayInt);
//     }, cb(600))
//   }

//   typeLine(delayInt);

// function delayInt(delay) {
//   return Math.floor(Math.random() * delay);
// }

// const writeCh = (ch) => new Promise(resolve => 
//     setTimeout(() => {
//     resolve(ch) 
// }, Math.random() * 1000)
// )






const typeWriter = async (str) => {
    for (let ch of str) {
        console.log(await writeCh(ch))
        
    }
}

const writeCh = function (ch) {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(ch)
        }, Math.random() * 1000)
    )
}

typeWriter('Hello world bro')
