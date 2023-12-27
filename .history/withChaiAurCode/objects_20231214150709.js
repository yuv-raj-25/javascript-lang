// singleton
//Object.create

const myuser = Symbol("user 1 this is")

const user = {
    name: "yuvraj chaudhary",
    age: 21,
    myuser: "user "
    email: "yuvrajchaudhay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "sunday","saturday"]

}


console.log(user.name);
console.log(user["name"]);