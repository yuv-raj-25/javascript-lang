////    forOf  loop  ///////
// const arr = [1,2,3,4,5]

// for (const nums of arr) {
//     console.log(nums);
    
// }


//// Maps ////

const map = new Map()
map.set('in','india')
map.set('Us','usa')
map.set('uk','england')

// console.log(map);

for (const [key , value] of map) {
    console.log(key, ":-" ,value);
    
}

const myObjects = {
    js: 'javascript ',
    cpp:'c++',
    py: 'python',
    rb:'rub'

}