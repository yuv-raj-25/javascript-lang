function rectangle(len ,brea){

    this.length=len, 
    this.breadth=brea,
    this.func=function(){
        console.log(len*brea);
    }


};
let functionstore=rectangle(5,6) 