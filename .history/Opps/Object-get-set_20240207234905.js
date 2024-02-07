const User = {
    _email: "yuvraj123",
    _name: "yuvrajch",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const yuv = Object.create(User)
console.log(yuv);