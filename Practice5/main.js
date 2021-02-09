function update() {

   
   fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
       .then(response => response.json())
       .then(courses => {
           //======================================================
           let coursesNamesArr = ['#usd-uah', '#euro-uah', '#rur-uah', '#btc-usd']
           let buyIdNamesArr = ['#buy-usd', '#buy-euro', '#buy-rur', '#buy-btc']
           let saleIdNamesArr = ['#sale-usd', '#sale-eur', '#sale-rur', '#sale-btc']
           for (let i = 0; i < courses.length; i++) {
               let courseName = document.querySelector(coursesNamesArr[i])
               courseName.innerHTML = `${courses[i].ccy}/${courses[i].base_ccy}`
               let buyCourse = document.querySelector(buyIdNamesArr[i])
               buyCourse.innerHTML = `${parseFloat(courses[i].buy).toFixed(2)}`
               let saleCourse = document.querySelector(saleIdNamesArr[i])
               saleCourse.innerHTML = `${parseFloat(courses[i].sale).toFixed(2)}`
           }
           //======================================================

           //  let usdUah = document.querySelector('#usd-uah')
           //  usdUah.innerHTML = `${courses[0].ccy}/${courses[0].base_ccy}`
           //  let euroUah = document.querySelector('#euro-uah')
           //  euroUah.innerHTML = `${courses[1].ccy}/${courses[1].base_ccy}`
           //  let rurUah = document.querySelector('#rur-uah')
           //   rurUah.innerHTML = `${courses[2].ccy}/${courses[2].base_ccy}`
           //  let btcUsd = document.querySelector('#btc-usd')
           //  btcUsd.innerHTML = `${courses[3].ccy}/${courses[3].base_ccy}`
         
           //=================================================================

           //  let buyUsd = document.querySelector('#buy-usd')
           //  buyUsd.innerHTML = `${parseFloat(courses[0].buy).toFixed(2)}`
           //  let buyEuro = document.querySelector('#buy-euro')
           //  buyEuro.innerHTML = `${parseFloat(courses[1].buy).toFixed(2)}`
           //  let buyRur = document.querySelector('#buy-rur')
           //  buyRur.innerHTML = `${parseFloat(courses[2].buy).toFixed(2)}`
           //  let buyBtc = document.querySelector('#buy-btc')
           //  buyBtc.innerHTML = `${parseFloat(courses[3].buy).toFixed(2)}`

        
           //==================================================================
           //  let saleUsd = document.querySelector('#sale-usd')
           //  saleUsd.innerHTML = `${parseFloat(courses[0].sale).toFixed(2)}`
           //  let saleEur = document.querySelector('#sale-eur')
           //  saleEur.innerHTML = `${parseFloat(courses[1].sale).toFixed(2)}`
           //  let saleRur = document.querySelector('#sale-rur')
           //  saleRur.innerHTML = `${parseFloat(courses[2].sale).toFixed(2)}`
           //  let saleBtc = document.querySelector('#sale-btc')
           //  saleBtc.innerHTML = `${parseFloat(courses[3].sale).toFixed(2)}`
           // 

       });
}
update()
elem.onclick = update

