// -Создайте меню, которое раскрывается / сворачивается при клике -
// let ul = document.querySelector('.ul')
// let menu = document.querySelector('.title')
// menu.addEventListener('click', function () {
//     ul.classList.toggle('remove')
// })

//========================================================

//     створити 2 форми по 2 інпути в кожній.ствоирити кнопку при кліку на яку считується та виводиться на консоль 
//інформація з цих 2 х форм.
// Кнопка повинна лежати за межами форм(Щоб ьуникнути перезавантаження сторінки)
// Доступ до інпутів через Forms API.Отже дайте формі та інпутам всі необхідні атрибути. 

// let btn = document.getElementsByClassName('userData')[0]
//  let user = document.forms.user
//  let adress = document.forms.adress
// btn.addEventListener('click', function () {
   
//     console.log(`
//                 user name - ${user.input1.value}
//                 user surname - ${user.input2.value}
//                 user street - ${adress.input3.value}
//                 user house number - ${adress.input4.value}
//                 `);
// })


//=====================================================================

//     Створити 3 инпута та кнопку.Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додатковачастина для завдання)

let btn = document.getElementsByClassName('button')[0]
// let tableData = document.forms.table


btn.addEventListener('click', function () {
let tr = table.tableTr.value
let td = table.tableTd.value
let value = table.tableValue.value
    let tableTag = document.createElement('table')
    tableTag.style.border = "border: 1px solid black"
    document.body.appendChild(tableTag)
    for (let i = 0; i < tr; i++) {
        let line = document.createElement('tr')
            for (let j = 0; j < td; j++) {
                let cell = document.createElement('td')
                cell.style.border = "1px solid black"
                cell.innerText = value
                line.appendChild(cell)
            }
        tableTag.appendChild(line)
    }
})