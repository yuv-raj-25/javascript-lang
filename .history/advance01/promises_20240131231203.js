const promiseOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log('async ask ');
        
    }, 1000);

})