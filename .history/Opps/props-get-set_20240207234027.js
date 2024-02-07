function User(name , id){
    this._name= name
    this._id = id

    Object.defineProperty(this, 'name',{
        get: function(){
            return this._name
        },
        set: function(value){}
    })
}