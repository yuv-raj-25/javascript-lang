function rectangle(len ,brea){

    this.length=len, 
    this.breadth=brea,
    this.func=function(){
        console.log(len*brea);
    }


};
let functionstore= new rectangle(5,6); 
let area=rectangle.func
console.log(functionstore);