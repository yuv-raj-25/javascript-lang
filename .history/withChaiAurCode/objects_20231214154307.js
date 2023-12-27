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


// console.log(user.name);
// console.log(user["name"]);
// console.log(user[myuser]);
// console.log( typeof user[myuser]);

user.email = "yuvichaudhary@gmail.com"

// console.log(user);
// Object.freeze(user);

user.age = 19;
// console.log(user);


user.greetings = function(){
    console.log("hello users");
}
user.greetingsTwo = function(){
    console.log(`hello my name is ${this.name}`);
}

// console.log(user.greetings( ));
// console.log(user.greetingsTwo());


const tinderUser = {
    name: "xyz",
    id: 22,
    email: "abc@gmail.com"
}
const tinderUser2 = {
    name: "xyz",
    id: 22,
    email: "abde@gmail.com"
}

// const tinderUser3 = {tinderUser,tinderUser2}

const tinderUser3 = Object.assign(,tinderUser,tinderUser2)
console.log(tinderUser3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("number"));

