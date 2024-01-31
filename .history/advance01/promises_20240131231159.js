const promiseOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log('async ');
        
    }, 1000);

})