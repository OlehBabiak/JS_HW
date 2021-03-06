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
let greet = document.createElement('h1')
document.body.appendChild(greet)

function print() {
    let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let p = document.createElement('h')
                p.innerText = 'H'
                greet.appendChild(p)
                resolve()
            }, delay = Math.random() * 1000);

        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'e'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'l'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'l'
                    greet.appendChild(p)
                    resolve()
                }, delay);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'o'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = ' '
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'w'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'o'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'r'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'l'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let p = document.createElement('h')
                    p.innerText = 'd'
                    greet.appendChild(p)
                    resolve()
                }, delay = Math.random() * 1000);
            });
        })
}
   
print()



// let money = 0
// function clearHouse(isJobDone, cb) {
//    setTimeout(() => {
//         if (isJobDone) {
//             money = 500;
//             cb(null, money)
//         } else {
//             cb('Ooops, I did it again!', null)
//         }
//    }, 2000);
// }

// clearHouse(true, (err, party)=> {
//     if (err) {
//         document.write(err)
//     } else {
//         document.write('I stay racher for ' + party)
//     }
// })
// console.log(money);