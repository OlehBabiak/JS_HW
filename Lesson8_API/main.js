 let userBlock = document.createElement('div')
 userBlock.classList.add('clock')
 document.body.appendChild(userBlock)
 
 
 fetch('https://api.sampleapis.com/futurama/characters')
     .then(resp => resp.json())
     .then(heroes => {
         for (const hero of heroes) {
             let info  = document.createElement('p')
             let a = document.createElement('a')
             a.href = `heroesDetales.html?name=${hero.name.first}&surname=${hero.name.last}&full=${JSON.stringify(hero)}`
             a.target = 'blank'
             a.innerText = `${hero.id} ${hero.name.first} - ${hero.name.last}`
             info.appendChild(a)
             let img = document.createElement('img')
             img.src = hero.images.main
            userBlock.appendChild(info)
            userBlock.appendChild(img)
         }
     });