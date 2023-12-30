//   immediate Invoked Function Expression -> IIFE

// function chai (){
//     console.log("DB Connected");
// }
// chai()

(function chai (){
    // this is a name IIFe
    console.log(`DB Connected `);
})();

((name) =>{
    console.log(`DB Connected two ${name} `);
})("yuvraj")
