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
        super(userName)
        this.password = password
        this.email = email

    }
    addCourse(){
        console.log(`the course is added by ${this.userName}`);
    }
}

console