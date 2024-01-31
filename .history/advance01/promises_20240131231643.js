const promiseOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log('async task is completed');
        resolve()
        
    }, 1000);

})

promiseOne.then(()=>{
    console.log('promise is consumed');

})

new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log('async a');
    }, 1000);

})