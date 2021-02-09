fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((users) => {
    for (const user of users) {

        document.write(`
        <div class = 'user'><span>User ID:</span> ${user.id}</div>
        <div class = 'user'><span>User Name:</span>${user.name}</div>
        <div class = 'user'><span>User full name:</span>${user.username}</div>
        <div class = 'user'><span>User email:</span>${user.email}</div>
        <div class = 'user'><span>User address:</span>${user.address.city}</div>
        <div class = 'user'><span>User phone:</span>${user.phone}</div>
        <div class = 'user'><span>User website:</span>${user.website}</div>
        <div class = 'user'><span>User company</span>:${user.company.name}</div>
        </br>
        `)
    }
})
