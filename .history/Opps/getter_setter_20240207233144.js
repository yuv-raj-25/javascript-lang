class User{
    constructor(name , password) {
        this.name = name
        this.password = password   
    }

    get name(){
        return this.name.toUpperCas
    }
}

const yuvi = new User("yuvraj","abcdef");

console.log(yuvi);