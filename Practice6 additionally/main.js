// ** * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі users.За допомогою document.createElement вивести їх 
//в браузер.Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок(блок в блоці). **

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => {
//         for (const user of users) {  //отримуєм 1 юзера 

//            let userContentDiv = document.createElement('div')

//                 for (const key in user) {
//                     console.log(key);
//                     if (typeof (user[key]) === 'string' || typeof (user[key]) === 'number') { // якщо знач ключа стрінга і номер виводимо їх значення
//                         let propDiv = document.createElement('div')
//                         propDiv.innerText = `${key}: ${user[key]}`
//                         userContentDiv.appendChild(propDiv)
//                     } else{    // інакше працюємо як з обєктом

//                           let propDivInner = document.createElement('div') 
//                           propDivInner.innerText = `${key}:` //виводим ключ обєкта адреси та компанії
//                           propDivInner.classList.add('innerContent')

//                                     for (const key2 in user[key]) {  // виводимо значення ключів адреси і компанії


//                                       if (typeof (user[key][key2]) !== 'object'){  // якщо значення не обэкт, виводимо значення 
//                                           let propDivInner2 = document.createElement('div')
//                                           propDivInner2.innerText = `-${key2}: ${user[key][key2]}`
//                                           propDivInner.appendChild(propDivInner2)
//                                       }else{    // інакш працюєм як з обэктом
//                                          let propDivInner2 = document.createElement('div')
//                                          propDivInner2.innerText = `-${key2}:`
//                                          propDivInner2.classList.add('geo')
//                                           if (typeof (user[key][key2]) === 'object') {
//                                               for (const key3 in user[key][key2]) {
//                                                   let propDivInner3 = document.createElement('div')
//                                                   propDivInner3.innerText = `-- ${key3}: ${user[key][key2][key3]}`
//                                                   propDivInner2.appendChild(propDivInner3)
//                                               }
//                                           }
//                                          propDivInner.appendChild(propDivInner2)
//                                       }
//                                     }    
//                           userContentDiv.appendChild(propDivInner)
//                     }   
//                 }

//            userContentDiv.classList.add('userContentDiv')
//            document.body.appendChild(userContentDiv)
//     }})


// let content = document.getElementById('content');  // Віталік 
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(users => users.json())
//     .then(usersJson => {
//         console.log(usersJson);
//         for (const user of usersJson) {
//             let userDiv = document.createElement('div');

//             for (const userkey in user) {
//                 let innerDiv = document.createElement('div');
//                 if (typeof user[userkey] !== 'object') {
//                     innerDiv.innerText = $ {
//                         userkey
//                     }: $ {
//                         user[userkey]
//                     };
//                 } else {
//                     innerDiv.innerText = $ {
//                         userkey
//                     }: ;
//                     for (const item in user[userkey]) {
//                         const itemDiv = document.createElement('div');
//                         itemDiv.innerText = `${item}:${user[userkey][item]}`
//                         innerDiv.appendChild(itemDiv)
//                         if (typeof user[userkey][item] === 'object') {
//                             itemDiv.innerText = $ {
//                                     item
//                                 }:
//                                 for (const geo in user[userkey][item]) {
//                                     const geoDiv = document.createElement('div');
//                                     geoDiv.innerText = $ {
//                                         geo
//                                     }: $ {
//                                         user[userkey][item][geo]
//                                     };
//                                     itemDiv.appendChild(geoDiv);
//                                 }
//                         }

//                     }
//                     userDiv.appendChild(innerDiv);
//                 }
//                 userDiv.appendChild(innerDiv);


//             }
//             content.appendChild(userDiv)
//         }
//     });



//     * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі posts.За допомогою document.createElement вивести їх 
//в браузер.Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об`єкт(якщо він існує) в свій блок(блок в блоці). **
//     * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі comments.За допомогою document.createElement вивести їх 
//в браузер.Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок(блок в блоці). **
//     ** ** при помощи fetch(как в примере) получить от jsonplaceholder все posts.Внутри последнего then() сделать еще один fetch 
// который сделает запрос и получит все comments.Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка: в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту



   
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            
                fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(comments => {
                    for (const post of posts) {
                        let postDiv = document.createElement('div')
                        for (const key in post) {
                            let postDivContent = document.createElement('div')
                            postDivContent.innerHTML = `${key}: ${post[key]}`
                            postDivContent.classList.add('postDivContent')
                            postDiv.appendChild(postDivContent)
                                         }
                            for (const comment of comments) {
                                if (post.id === comment.postId) {
                                    for (const commKey in comment) {
                                       let commentDiv = document.createElement('div')
                                       commentDiv.innerText = `${commKey}: ${comment[commKey]}`
                                       postDiv.appendChild(commentDiv)
                                            
                                        }
                                    }
                                    
                                }
                            
                        postDiv.classList.add('postDiv')
                        document.body.appendChild(postDiv) 

                    }
                })


        })

