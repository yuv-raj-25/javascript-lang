class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`);
    }

    createId(){
        return`123456`
    }

    // when we apply the ststic keyword to 

//    static createId(){
//         return `12345`
//     }
}

const yuvraj = new User('yuvraj')

console.log(yuvraj.createId());