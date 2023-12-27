const array = [1,2,3,4,5]
const array2 = [9,8,7,6]

// array.push(array2)
// console.log(array)

// const new_array = array.concat(array2)

// console.log(new_array);

// const  new_array2 = [...array , ...array2]
// console.log(new_array2);


const anotherArray = [1,2,3,[1,3,3],[12,[5,6],3],5]

// const anotherNewArray = [...array,...array2,...anotherArray]
const anotherNewArray = anotherArray.flat(Infinity)

// console.log(anotherNewArray);

console.log(Array.isArray("yuvraj"));
console.log(Array.from("yuvraj"));
console.log(Array.from({name: "yuvraj"})) /// interesting case  give empty 
//in this case we have to decide that we make the array from keys or value





