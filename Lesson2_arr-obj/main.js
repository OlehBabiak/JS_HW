//  1.  --створити масив з:
//      - з 5 числових значень
//      - з 5 стічкових значень
//      - з 5 значень стрічкового, числового та булевого типу
//      - та вивести його в консоль

// const numberArr = [5, 35.2, 98, -36, 125]
// const stringArr = ['Apple', 'Samsung', 'Nokia', 'Xiaomi', 'Lenovo']
// const anyArr = ['book', true, -326, 'student', false]
// console.log(numberArr, stringArr, anyArr);

//=====================================================================================================

//  2.-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// const arr = []
// arr[0] = 'book'
// arr[1] = 6958
// arr[2] = true
// arr[3] = 'true'
// arr[4] = 'Lenovo'
// console.log(arr);

//============================================================================================================

// 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let string1= 'Lorem, ipsum dolor.'
// let string2= 'Lorem ipsum dolor sit.'
// let string3= 'Lorem ipsum dolor sit amet.'
// let string4= 'Lorem ipsum dolor sit amet consectetur.'
// let string5= 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
// let string6= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
// let string7= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea?'
// let string8= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam.'
// let string9= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, facilis aliquam.'
// let string10= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sint quasi unde?'

// const textArr = [string1, string2, string3, string4, string5, string6, string7, string8, string9, string10]
// for (const text of textArr) {
//     document.write(`<div>${text}</div>`)
// }

//========================================================================================================================

// 4. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < textArr.length; i++) {

//     document.write(`<div>index - ${i}, ${textArr[i]}</div>`)
// }

//=============================================================================================================================

// 5. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let string1= 'Lorem, ipsum dolor.'
// let string2= 'Lorem ipsum dolor sit.'
// let string3= 'Lorem ipsum dolor sit amet.'
// let string4= 'Lorem ipsum dolor sit amet consectetur.'
// let string5= 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
// let string6= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
// let string7= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea?'
// let string8= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam.'
// let string9= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, facilis aliquam.'
// let string10= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sint quasi unde?'
// let string11= 'Lorem, ipsum dolor.'
// let string12= 'Lorem ipsum dolor sit.'
// let string13= 'Lorem ipsum dolor sit amet.'
// let string14= 'Lorem ipsum dolor sit amet consectetur.'
// let string15= 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
// let string16= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
// let string17= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea?'
// let string18= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quisquam.'
// let string19= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, facilis aliquam.'
// let string20= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sint quasi unde?'

//const h1Arr = [string1, string2, string3, string4, string5, string6, string7, string8, string9, string10, string11, string12, string13, string14, string15, string16, string17, string18, string19, string20]

// let i = 0;

// while (i < h1Arr.length) {
//     document.write(`<h1>${h1Arr[i]}</h1>`)
//     i++
// }

//=======================================================================================================================

// 6. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;

// while (i < h1Arr.length) {
//     document.write(`<h1>index- ${i}, ${h1Arr[i]}</h1>`)
//     i++
// }

//===================================================================================================================================

// 7. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const numberArr = [12, -25, 3.14, 2.7, 136, 98, -254, 32, 74, -36.5]
// for (const number of numberArr) {
//     console.log(number);
// }
//===================================================================================================

// 8.- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const stringArr = ['Створити', 'масив', '3', 'десяти', 'строкрових', 'елементів', 'Вивести', 'в', 'консоль', 'елементи']

// stringArr.forEach(string => {
//     console.log(string);
// });

//========================================================================================
// 9. - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// const anyArr = [4, true, -2.7, 3.14, 'Lorem', 'mercedes', false, 42, 'typeof', 777 ]

// for (let i = 0; i < anyArr.length; i++) {
//     console.log(anyArr[i]); 
    
// }

//===============================================================================================================================

// 10. - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (let i = 0; i < anyArr.length; i++) {
//     if(typeof(anyArr[i]) === "boolean") {

//         console.log(anyArr[i]); 
//     }
    
// }
//=====================================================================================================================================
// 11. - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let i = 0

// while (i < anyArr.length) {
//     if(typeof(anyArr[i]) === "number") {

//         console.log(anyArr[i]); 
//     }
//     i++
// }

//=================================================================================================================================

// 12.- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (const string of anyArr) {
//     if(typeof(string) === "string"){
//         console.log(string);
//     }
// }

//====================================================================================================================================

// 13. - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
//Вивести в консоль всі його елементи в циклі.

// const arr = []
// arr[0] = 'book'
// arr[1] = 6958
// arr[2] = true
// arr[3] = 'true'
// arr[4] = 'Lenovo'
// arr[5] = 'масив'
// arr[6] = 125
// arr[7] = false
// arr[8] = -325
// arr[9] = 'цикл'
// arr.forEach(element => {
//     console.log(element);
// });

//=====================================================================================================================
// 14. - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Step: ${i}`); 
// }

//============================================================================================================================
// 15.- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`Step: ${i}`);
//     document.write(`Step: ${i} <br>`)
    
// }

// =====================================================================================================================
// 16. - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`Step: ${i}`);
//     document.write(`Step: ${i} <br>`)
// }

//==========================================================================================================================

// 17. - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {

//     if (i%2===0) {
//           console.log(`Step: ${i}`);
//     document.write(`Step: ${i} <br>`)
//     }
  
    
// }

//===================================================================================================================
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {

//     if (i%2!=0) {
//           console.log(`Step: ${i}`);
//     document.write(`Step: ${i} <br>`)
//     }
  
    
// }
//===============================================================================================
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let min = 0; min <= 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//        document.write((`Min: ${min}, Sec: ${sec} <br>`))
//        if(min===2 && sec===0) break 
//     }
    
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// let hour = document.querySelector('.hour')
// let min = document.querySelector('.min')
// let sec = document.querySelector('.sec')
// let btnStart = document.querySelector('.start')
// btnStart.addEventListener('click', timer(s))

// 
//     for (let h = 0; h <= 2; h++) {
//         for (let m = 0; m < 60; m++) {
//             if (h === 2 && m === 21) break
//             for (let s = 0; s < 60; s++) {

//                 document.write((`Hour: ${h}, Min: ${m}, Sec: ${s} <br>`))
//                 if (m === 20 && s === 0) break
//             }

//         }

//     }




