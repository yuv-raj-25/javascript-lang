const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
// console.log(descriptor);
console.log(Math.PI);


const yuvi = {

    name: "yuvraj",
    price: 2000,
    isAvailable: true,

    istrue:function(){ 
        console.log('not available ');   
    }

}
console.log(Object.getOwnPropertyDescriptor(yuvi,'name'));

Object.defineProperty(yuvi , 'price',''{
    // writable: false,
    enumerable: false,
    // iteratable: false,
    // configurable: false
})
// console.log(Object.getOwnPropertyDescriptor(yuvi,'name'));


for (const [key , value ] of Object.entries(yuvi)) {

    if(typeof value !==  'function'){

        console.log(`${key} : ${value}`);
    }

    
}




