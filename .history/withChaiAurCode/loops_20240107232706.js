////    forOf  loop  ///////
// const arr = [1,2,3,4,5]

// for (const nums of arr) {
//     console.log(nums);
    
// }


//// Maps ////

// const map = new Map()
// map.set('in','india')
// map.set('Us','usa')
// map.set('uk','england')

// // console.log(map);

// for (const [key , value] of map) {
//     console.log(key, ":-" ,value);
    
// }


/////  forin loop for objects because the for of loop does not work on the objects

// const myObjects = {
//     js: 'javascript ',
//     cpp:'c++',
//     py: 'python',
//     rb:'ruby'

// }

// for (const key in myObjects) {
//     // console.log(key);
//     // console.log(myObjects[key]);
//     console.log(`${key} shortcut key for ${myObjects[key]}`);
    
        
    
// }


/////  forEach   //////

// const coding = [1,2,3,4,5,7]

// // coding.forEach(function(val){
// //     console.log(val);
// // })

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const language = [
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },
    {
        languageName:"c++",
        languageFileName: "cpp"
    }  
]

// language.forEach( (value) => {
//     // console.log(value.languageName);

//     // console.log(value.languageFileName);
//     console.log(value);

// })


///// filter  ////

const numbers  = [1,2,3,4,5,6,7,8,9,10]

const myNums = numbers.filter( (nums) => nums > 3)
console.log(myNums);


const newNums = []

numbers





