const users = [
    {
        fname: 'John',
        lname: 'Doe'
    },
    {
        fname: 'Jane',
        lname: 'Doe'
    }
]


const joinedNames = users.map(user => {
    let fullName = user.fname + user.lname
})

console.log(joinedNames);