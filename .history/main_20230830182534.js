// const users = [
//     {
//         fname: 'John',
//         lname: 'Doe'
//     },
//     {
//         fname: 'Jane',
//         lname: 'Doe'
//     }
// ]

// const joinedNames = users.map(user => {
//     return {
//         fullName: `${user.fname} ${user.lname}`
//     }
// })

// console.log(joinedNames);

// const movies = [
//   {
//     name: "Interstellar",
//     budget: 500,
//   },
//   {
//     name: "Bahubali",
//     budget: 200,
//   },
//   {
//     name: "Soldier",
//     budget: 100,
//   },
//   {
//     name: "Matrix",
//     budget: 200,
//   },
// ];

// const totalBudget = movies.reduce((acc, movie) => {
//     acc = acc + movie.budget;
//     return acc;
// }, 0)
// console.log(totalBudget);



// const admins = [2, 1, 5];

// const user = {
//   user: "XYZ",
//   id: 2,
// };

// const adminIndex = admins.indexOf(user.id);  // return index of parameter else -1;
// console.log(adminIndex);

// let isAdmin = admins.includes(user.id);   // retturn true or false
// console.log(isAdmin);



const users = [
    {
        user:'XYZ',
        id:2
    },
    {
        user:'ABC',
        id:1
    },
    {
        user:'PQR',
        id:2
    }
]

const indexes = users.findIndex((user) => {
    return user.id;
})


