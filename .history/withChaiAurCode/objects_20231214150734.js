// singleton
//Object.create

const myuser = Symbol("")

const user = {
    name: "yuvraj chaudhary",
    age: 21,
    myuser: "user 1 this is",
    email: "yuvrajchaudhay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "sunday","saturday"]

}


console.log(user.name);
console.log(user["name"]);