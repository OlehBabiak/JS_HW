let cars = [
    {
        id: 111,
        model: 'A200',
        producer: 'Mercedes',
        tankVolume: 60,
        horsePower: 280,
        image: '../Practice3/imgs/2018_Mercedes-Benz_A200_AMG_Line_Premium+_1.3_Front.jpg'
    },

    {
        id: 222,
        model: 'Fusion',
        producer: 'Ford',
        tankVolume: 62,
        horsePower: 240,
        image: '../Practice3/imgs/2019_Ford_Fusion_SEL_1.5L,_front_9.8.19.jpg'
    },

    {
        id: 333,
        model: 'A6',
        producer: 'Audi',
        tankVolume: 65,
        horsePower: 220,
        image: '../Practice3/imgs/audi-a6-avant-tfsie-quattro-2020.jpg'
    },

    {
        id: 444,
        model: 'Sonata',
        producer: 'Hyundai',
        tankVolume: 60,
        horsePower: 160,
        image: '../Practice3/imgs/hyundai-550x300.jpg'
    },

    {
        id: 555,
        model: 'Optima',
        producer: 'KIA',
        tankVolume: 58,
        horsePower: 175,
        image: '../Practice3/imgs/kia_optima.jpg'
    },

    {
        id: 666,
        model: 'Accord',
        producer: 'Honda',
        tankVolume: 64,
        horsePower: 180,
        image: '../Practice3/imgs/maxresdefault.jpg'
    },

    {
        id: 777,
        model: '6',
        producer: 'Mazda',
        tankVolume: 64,
        horsePower: 180,
        image: '../Practice3/imgs/mazda-6-front2.jpg'
    },

    {
        id: 888,
        model: 'Talisman',
        producer: 'Renault',
        tankVolume: 58,
        horsePower: 130,
        image: '../Practice3/imgs/renault-talisman-lead-image.jpg'
    },

    {
        id: 999,
        model: 'C5',
        producer: 'Citroen',
        tankVolume: 55,
        horsePower: 160,
        image: '../Practice3/imgs/unnamed.jpg'
    },

    {
        id: 1212,
        model: 'Impreza',
        producer: 'Subaru',
        tankVolume: 58,
        horsePower: 270,
        image: '../Practice3/imgs/завантаження.jpg'
    }
]

for (let i = 0; i < cars.length; i++) {
    document.write(`
    <div class = 'items'>
        <h2>${cars[i].producer} - ${cars[i].model}</h2>
        <p>ID = ${cars[i].id}</p>
        <img src = '${cars[i].image}' alt = '${cars[i].producer}' class = 'img'>
        <p>Tank Volume - ${cars[i].tankVolume}</p>
        <p>Hors power - ${cars[i].horsePower}</p>
    </div>
    `)
    
}