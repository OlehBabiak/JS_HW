// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт'
// let num = 123
// let flag = true
// let txt = 'Пtrue'

// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(flag));
// console.log(typeof(txt));

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
    // let a1 =  (100-83)*2   //34
    // let a2 =  (2+4)*2  //12
    // let a3 =  358/4-23.5//66
    // let a4 =  100/20+85  //90
    // let a5 =  32*2+23   //87

    // console.log(a1);
    // console.log(a2);
    // console.log(a3);
    // console.log(a4);
    // console.log(a5);
    // Старайтесь використовувати різні оператори. 
    // Example: 88 = (16 / 2) * 11

    //3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:

    // let a6 = 5 % 3 
    // let a7 = 3 % 5
    // let a8 = 5 + '3'  
    // let a9 = '5' - 3 
    // let a10 = 75 + 'кг'   

    // console.log(a6);
    // console.log(a7);
    // console.log(a8);
    // console.log(a9);
    // console.log(a10);

    // 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
   //Значееня площі зберігати в змінній s.

//    let height = 23
//    let width = 10
//    let s = height * width
//    console.log(s);

// 5. Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
   // результат поместите в переменную v.

//    let heightC = 10 
//    let dC = 4
//    let v = Math.PI * Math.pow(dC/2, 2) * heightC 
//    console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
 //  Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

//  let n = 3
//  let m = 4
//  let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2))
//  console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world'
// document.write(str)
// alert(str)
// console.log(str);

// 8.Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n)

// let name = 'Олег'
// let surname = 'Бабяк'
// let fatherName = 'Богданович'
// let age = 39
// let hobby = 'gym'
// alert(surname + '\n' + name + '\n' + fatherName + '\n' + age + '\n' + hobby)

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Кто '
// let str2 = 'ты'
// let str3 = ' такой?'
// let concatenation = str1 + str2 + str3
// document.write(concatenation)

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    // let str = "20";
    //  let a = 5;
    //  document.write(str + a + "<br/>");  //'205' коли э оператор додавання і один з операндів строка, відбувається конкатинація
    //  document.write(str - a + "<br/>");   //15  в решта випадків строка перетворюється на число
    //  document.write(str * "2" + "<br/>");  //40
    //  document.write(str / 2 + "<br/>");  //10

// 11.Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    // parseInt("3.14")  //3
    // parseInt("-7.875")  //-7
    // parseInt("435")  //435
    // parseInt("Вася") //NaN

    // 12.С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    // let str = prompt("Enter something", "ho-ho")
    // console.log(str);

    //13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

    // let a = +prompt('Enter first number')
    // let b = +prompt('Enter second number')
    // let sum = a+b
    // alert(sum)

    // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
    //  Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

    // let name = prompt('Enter your name')
    // let surName = prompt('Enter your surName')
    // let age = prompt('Enter your age')
    // alert('Доброго вечера ' + name + surName + ',' + ' мои поздравления что вам ' + age)

    //ДОП

    // 1. Три різних числа вводяться через prompt().
    // За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
    
    // let a = parseFloat(prompt());
    // let b = parseFloat(prompt());
    // let c = parseFloat(prompt());



// if (c > b && b > a) {
//     console.log(a, b, c)
  
// } else
//     if (b > c && c > a) {
//         console.log(a, c, b)
//     } else
//         if (c > a && a > b) {
//             console.log(b, a, c)
        
//         }
//         else
//             if (a > c && c > b) {
//                 console.log(b, c, a)
            
//             }
//             else
//                     if (a > b && b > c) {
//                         console.log(c, b, a)
//                     }
//                     else
//                         if (b > a && a > c) 
//                         {
//                             console.log(c, a, b)
                            
//                         }

//    2. Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let colorA = prompt();

// #1
// if (colorA === 'зеленый') {
//     alert('иди');
// }
// else if (colorA === 'желтый') {
//     alert('подожди');
// }
// else if (colorA === 'красный') {
//     alert('стой');
// }
// else { alert('делай что хочешь') }

// #2
// switch (colorA) {
//     case 'зеленый':
//         alert('иди');
//         break;

//     case 'желтый':
//         alert('подожди');
//         break;   
        
//     case 'красный':
//         alert('стой');
//         break;  

//     default: alert('делай что хочешь')
//         break;
// }


// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let colorA = prompt();
// let isRoadClear = confirm('дорога пустая?')

// if (colorA === 'green' && isRoadClear){
//     alert('иди');
// }
// else if (colorA === 'green' && !isRoadClear){
//     alert('подожди пока нарушители проедут')
// }

// else if (colorA === 'yellow' && isRoadClear) {
//     alert('жди');
// }
// else if (colorA === 'yellow' && !isRoadClear) {
//     alert('все равно жди')
// }

// else if (colorA === 'red' && isRoadClear) {
//     alert('стой все рано');
// }
// else if (colorA === 'red' && !isRoadClear) {
//     alert('стой и жди')
// }
// else { alert('делай что хочешь')}

