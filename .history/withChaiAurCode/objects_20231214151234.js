// singleton
//Object.create

const myuser = Symbol("key1")

const user = {
    name: "yuvraj chaudhary",
    age: 21,
    [myuser]: "user 1",
    email: "yuvrajchaudhay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "sunday","saturday"]

}


console.log(user.name);
console.log(user["name"]);
console.log(user[myuser]);
console.log( typeof user[myuser]);

;