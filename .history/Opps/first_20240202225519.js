const user = {
    userName: "yuvraj chaudhary",
    loginCount: 8,
    signeId: true,

    getUserData: function(){
        console.log(this.userName);
    }
}

console.log(user.userName);
console.log(user.getUserData());