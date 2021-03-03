let input = document.createElement('input')
input.placeholder = 'enter item'
input.id = '#txt'
document.body.appendChild(input)

let btn = document.createElement('button')
btn.innerText = 'Add'
document.body.appendChild(btn)

let ul = document.createElement('ul')
document.body.appendChild(ul)

btn.addEventListener('click', function () {
    if (input.value != '') {
        let li = document.createElement('li')
        li.innerText = input.value
        ul.appendChild(li)

        let btn2 = document.createElement('button')
        btn2.innerText = 'Delete'
        li.appendChild(btn2)

        btn2.addEventListener('click', function () {
            li.classList.add('remove')
        })

        input.value = ''
    } else {
        alert('add item!')
    }



})



input.addEventListener('keyup', function (ev) {
    if (input.value != '') {
        if (ev.which === 13) {
            let li = document.createElement('li')
            li.innerText = input.value
            ul.appendChild(li)

            let btn2 = document.createElement('button')
            btn2.innerText = 'Delete'
            li.appendChild(btn2)

            btn2.addEventListener('click', function () {
                li.classList.add('remove')
            })

            input.value = ''
        }
    } else {
        alert('add item!')
    }

})