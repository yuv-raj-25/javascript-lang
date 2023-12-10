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
    let fullName = join(user.fname, us);
    return fullName;
})

console.log(joinedNames);