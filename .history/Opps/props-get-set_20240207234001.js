function User(name , id){
    this._name= name
    this._id = id

    Object.defineProperty(this, 'name',{
        get: function(){},
        
    })
}