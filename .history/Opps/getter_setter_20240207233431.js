class User{
    constructor(name , password) {
        this.name = name
        this.password = password   
    }
    get password(){
        return `${this._password}!@#$%^#@!`
    }
    set password(value){
        this._password  = value

    }

    get name(){

        return this._name.toUpperCase();
    }

    set name(value){
        this._name = value;
    }
}

const yuvi = new User("yuvraj","abcdef");

console.log(yuvi.name);
console.log(yuvi.password);