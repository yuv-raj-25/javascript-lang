// ES6

//  class User {
//   constructor(username, password, email) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc `;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const yuvi = new User("yuvraj", "yuvi@gmail.com", "123456789");

// console.log(yuvi.encryptPassword());
// console.log(yuvi.changeUsername());

// without using the classes we can do this with the use of prototype

function User2(userName, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}


User2.prototype.encryptPassword = function(){
    return `${this.password}abc `;
}


const yuvi = new User("yuvraj", "yuvi@gmail.com", "123456789");

console.log();