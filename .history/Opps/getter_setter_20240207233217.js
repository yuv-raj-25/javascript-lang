class User{
    constructor(name , password) {
        this.name = name
        this.password = password   
    }

    get name(){
        return this.name.toUpperCase();
    }

    set name(value){
        this.name = valu
    }
}

const yuvi = new User("yuvraj","abcdef");

console.log(yuvi);