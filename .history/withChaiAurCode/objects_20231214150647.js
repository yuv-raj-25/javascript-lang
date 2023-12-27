// singleton
//Object.create

const myuser = Symbol("user 1 ")

const user = {
    name: "yuvraj chaudhary",
    age: 21,
    email: "yuvrajchaudhay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "sunday","saturday"]

}


console.log(user.name);
console.log(user["name"]);