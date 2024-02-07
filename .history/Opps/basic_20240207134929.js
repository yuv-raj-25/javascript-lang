class Animal{
    
    constructor(name,id ,email ){
        this.name=name
        this.id=id
        this.email=email

    }
    namechange(){
      this.name.toowerCase()
    }



    
};

let d=new Animal("DHRUV","4154","DHURV@GG")
console.log(d);

namechange();
console.log(d);