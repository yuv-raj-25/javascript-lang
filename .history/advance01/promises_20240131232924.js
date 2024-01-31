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
        console.log('async task 2');
        resolve()
    }, 1000);

}).then(()=>{
    console.log('async 2 is resolved');

})

const promiseThree = new Promise((resolve,reject) => {
        setTimeout(()=>{
            let error = true 
            if(!error){
                resolve({})
            }
        },1000)
}) 