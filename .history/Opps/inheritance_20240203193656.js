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
const name = new User1('yuvraj','yuvi@gmail.com','12345')

const name2 = new User("yuvraj chaudhary")

// name.addCourse()
// name.logMe()

name2.logMe()
name2

