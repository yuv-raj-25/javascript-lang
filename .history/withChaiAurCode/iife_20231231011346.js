//   immediate Invoked Function Expression -> IIFE

// function chai (){
//     console.log("DB Connected");
// }
// chai()

(function chai (){
    // r=this 
    console.log(`DB Connected `);
})();

((name) =>{
    console.log(`DB Connected two ${name} `);
})("yuvraj")
