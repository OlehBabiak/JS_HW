console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received...', backendData);
//     }, 2000);

// }, 2000);


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data');

//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// })

// p.then(data => {
//         return new Promise((resolve, reject)=> {
//             setTimeout(() => {
//                 data.modified = true
//                 reject(data)
//             }, 2000);
//         }) 
// })
// .then(clientData=> {
//     clientData.fromPromice = true
//     return clientData

//     })
// .then(data =>{
//     console.log('Modified', data);
// })
// .catch(err => console.error('Error', err))
// .finally(() => console.log('Finally'))

const sleep = ms => {
    return new Promise(function (resolve) {
        setTimeout(() => {
        console.log('alalalala');
        resolve('this action is ')
        }, ms)
    })
        
}

sleep(2000).then((msg)=> console.log(msg + 'after 2s'))
sleep(3000).then((msg) => console.log(msg + 'after 3s'))

Promise.all([sleep(2000), sleep(3000)])
.then(()=> {
    console.log('All promisee');
})

Promise.race([sleep(2000), sleep(3000)])
    .then(() => {
        console.log('Race promisee');
    })