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
    return {fullN`${user.fname} ${user.lname}`}
})

console.log(joinedNames);



const movies = [
  {
    name: "Interstellar",
    budget: 500,
  },
  {
    name: "Bahubali",
    budget: 200,
  },
  {
    name: "Soldier",
    budget: 100,
  },
  {
    name: "Matrix",
    budget: 200,
  },
];
