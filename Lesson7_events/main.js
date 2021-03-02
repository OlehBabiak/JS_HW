// -Создать произвольный елемент с id = text.Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id = "text".

// let elem = document.getElementById('text')
// let button = document.getElementById('button')
// button.addEventListener('click', function () {
//     elem.classList.toggle("remove")
    
    
// })

//     -
//     Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let button = document.getElementById('button')
// button.addEventListener('click', function () {
//     button.classList.toggle("remove")
// })

//     -
//     створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з 
//інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button = document.getElementById('button2')
// let input = document.getElementById('humanAge')
// button.addEventListener('click', function () {
//                 let age = input.value
//                 if (age < 18) {
//                     alert(`You don't have 18 yet`);
//                 }else{alert('Welcome');}
//             })

//==========================================================================================
//     -
//     Создать список комментариев, пример объекта коментария - {
//         title: 'lorem',
//         body: 'lorem ipsum dolo sit ameti'
//     }.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [{
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
        "postId": 2,
        "id": 6,
        "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
        "postId": 2,
        "id": 7,
        "name": "repellat consequatur praesentium vel minus molestias voluptatum",
        "email": "Dallas@ole.me",
        "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    }]
// let h1 = document.createElement('h1')
// h1.innerText = 'Comments'
// document.body.appendChild(h1)


// comments.forEach((comment) => {
//     let commentDiv = document.createElement('div')
//     commentDiv.innerText = comment.body
//     commentDiv.classList.add('com_div')
//     document.body.appendChild(commentDiv)
//     let button = document.createElement('button')
//     button.innerHTML = 'Delete'
//     commentDiv.appendChild(button)
//     button.addEventListener('click', function () {
//     commentDiv.classList.add("remove")
//     })
// })


//==============================================================================

//     **
//     * -Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let someBadWords = ['качка', 'півень', 'гусак', 'вовк', 'кіт', 'пес', 'голуб', 'сорока']

// let checkDiv = document.createElement('div')
// let h3 = document.createElement('h3')
// h3.innerText = 'Check the word'
// checkDiv.appendChild(h3)
// document.body.appendChild(checkDiv)
// let inputWord = document.createElement('input')
// checkDiv.appendChild(inputWord)
// let buttonCheck = document.createElement('button')
// buttonCheck.innerHTML = 'Check'
// checkDiv.appendChild(buttonCheck)




// buttonCheck.addEventListener('click', function () {
//             alert((someBadWords.includes(inputWord.value)) ? 'Хуйове слово' : 'Молодець')
                  
//               })
// let input = document.createElement('input')
// document.body.appendChild(input)
// let div = document.createElement('div')
// document.body.appendChild(div)
// input.oninput = function () {
//    div.innerText = this.value
// }
      
//============================================

