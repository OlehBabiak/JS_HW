// ** * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі users.За допомогою document.createElement вивести їх 
//в браузер.Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок(блок в блоці). **

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((users) => {
        for (const user of users) {  //отримуєм 1 юзера 
           
           let userContentDiv = document.createElement('div')

                for (const key in user) {
                    console.log(key);
                    if (typeof (user[key]) === 'string' || typeof (user[key]) === 'number') { // якщо знач ключа стрінга і номер виводимо їх значення
                        let propDiv = document.createElement('div')
                        propDiv.innerText = `${key}: ${user[key]}`
                        userContentDiv.appendChild(propDiv)
                    } else{    // інакше працюємо як з обєктом
                    
                          let propDivInner = document.createElement('div') 
                          propDivInner.innerText = `${key}:` //виводим ключ обєкта адреси та компанії
                          propDivInner.classList.add('innerContent')

                                    for (const key2 in user[key]) {  // виводимо значення ключів адреси і компанії
                                      
                                      
                                      if (typeof (user[key][key2]) !== 'object'){  // якщо значення не обэкт, виводимо значення 
                                          let propDivInner2 = document.createElement('div')
                                          propDivInner2.innerText = `-${key2}: ${user[key][key2]}`
                                          propDivInner.appendChild(propDivInner2)
                                      }else{    // інакш працюєм як з обэктом
                                         let propDivInner2 = document.createElement('div')
                                         propDivInner2.innerText = `-${key2}:`
                                         propDivInner2.classList.add('geo')
                                          if (typeof (user[key][key2]) === 'object') {
                                              for (const key3 in user[key][key2]) {
                                                  let propDivInner3 = document.createElement('div')
                                                  propDivInner3.innerText = `- ${key3}: ${user[key][key2][key3]}`
                                                  propDivInner2.appendChild(propDivInner3)
                                              }
                                          }
                                         propDivInner.appendChild(propDivInner2)
                                      }
                                    }    
                          userContentDiv.appendChild(propDivInner)
                    }   
                }
           
           userContentDiv.classList.add('userContentDiv')
           document.body.appendChild(userContentDiv)
    }})



//     * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі posts.За допомогою document.createElement вивести їх 
//в браузер.Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об`єкт(якщо він існує) в свій блок(блок в блоці). **
//     * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі comments.За допомогою document.createElement вивести їх 
//в браузер.Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок(блок в блоці). **
//     ** ** при помощи fetch(как в примере) получить от jsonplaceholder все posts.Внутри последнего then() сделать еще один fetch 
//который сделает запрос и получит все comments.Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//Подсказка: в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
