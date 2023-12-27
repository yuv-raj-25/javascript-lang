const array = [1,2,3,4,5]
const array2 = [9,8,7,6]

// array.push(array2)
// console.log(array)

// const new_array = array.concat(array2)

// console.log(new_array);

// const  new_array2 = [...array , ...array2]
// console.log(new_array2);


const anotherArray = [1,2,3,[1,3,3],[12,[5,6],3],5]

const anotherNewArray = [...array,...array2,...anotherArray]

