const promiseOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log('async task is completed');
        
        
    }, 1000);

})

promiseOne.then(()=>{
    console.log('promise is consumed');

})