function User(name , id){
    this._name= name
    this._id = id

    Object.defineProperty(this, 'name',{
        get: function(){
            return this._name.toUpperCase()
        },
        set: function(value){
            this._name = value
        }
    })
    Object.defineProperty(this, 'id',{
        get: function(){
            return this._id.toUpperCase()
        },
        set: function(value){
            this._id = value
        }
    })
}
const yuvi1 = new User('yuvraj','abcdef')
console.log(yuvi1.name);
console.log(yuvi1.);