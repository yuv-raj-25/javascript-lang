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
    let fullName = user.fname.split(' concat(user.lname);
    return fullName;
})

console.log(joinedNames);