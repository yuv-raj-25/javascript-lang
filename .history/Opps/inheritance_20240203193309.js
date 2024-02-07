class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`);
    }
}


class User1 extends User{
    constructor(userName,email,password){
        this.password = password

        
    }
}