// const user = {
//     userName: "yuvraj chaudhary",
//     loginCount: 8,
//     signeId: true,

//     getUserData: function(){
//         console.log(this.userName);
//     }
// }

// console.log(user.loginCount);
// console.log(user.getUserData());
 // console.log("this-> ",this);

// const promise  = new Promise()  // this new key here is constructor function  
// when we use this new keyword than first empty object is created which is called instance 
// constructor function is called through new keywords 


function User(userName, loginCount, signeId){
    this.userName = userName;
    this.loginCount = loginCount;
    this.signeId = signeId;
    
    return this

}


const userOne = User('yuvraj chaudhary', 1, true)
const userTwo = User('yuv', 10, false )
console.log(userOne);






