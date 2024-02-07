// ES6 


class User{
    constructor(username,password,email){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc `
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}


const yuvi  = new User('yuvraj',"")