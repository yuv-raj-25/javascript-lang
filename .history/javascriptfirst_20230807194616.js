// console.log('hello world ');
// alert('ok');

//   objects

// const lap = {
//     model: 'mackbook M1',
//     color: 'space grey'


// }

// console.log(lap);


// variables 

// let language = 'english ';
// console.log(language);



// let val = true && true;

// console.log(val);



// let val = false;

// console.log(val);


// let userenter = 'enter';

// if(!userenter == 'enter'){
//     console.log('you are logged in ');
// }
// else{
//     console.log('you are not logged in ');
// }


// terminary operator   /////

// !userenter == 'enter' ? console.log('you are logged in ') : console.log('you are not logged in ');



// let languages = ['java', 'cpp','pyhton','hindi'];

// // languages.push('dart');
// languages.unshift('c');
// languages.pop();
// // console.log(languages.english);

// languages.forEach(element => {
//     console.log(languages);

    
// });


// let actors = [
//     {
//         name: 'actor1',
//         payment: 100
//     },
//     {
//         name: 'actor2',
//         payment: 200
//     }
// ]

// for each loop ******** //////

// actors.forEach((actor) => {
//     actor.payment = actor.payment - 10;
    
// });
// console.log(actors);


//////      for loop  /////

// for(let i = 0; i <actors.length; i ++)
// {

//     actors[i].payment = actors[i].payment - 10;
// }
// console.log(actors);



//////   for of loop    ///// 


// for(let actor of actors){
//     console.log(actor);

// }

// let students = [
//     {
//         name: '1',
//         marks: 20
//     },
//     {
//         name: '2',
//         marks: 24
//     },
//     {
//         name: '3',
//         marks: 50
//     }
// ]

// let failed = students.filter((student) => student.marks < 45);

// console.log(failed);



// const users = [
//     {
//         fname: 'yuvraj',
//         lname:'chaudhary'
//     },
//     {
//         fname: 'lokie',
//         lname:'kumar'
//     }
// ]


// let finalusers = users.map((user) =>{
//     return{
//         fullname: `${user.fname} ${user.lname}`
//     }
    
// });
// console.log(finalusers);


// const users = ['yuvraj', 20,90];


// let user = {
//     name: 'yuvraj ',


// }

// let isuser = users.indexOf(user.name)> -1;

// // users.indexOf(user.name);
// console.log(isuser);





// for(let i = 0; i<=5; i++)
// {
//     setTimeout(() => console.log(i),2000);
// }


// for(var i = 0; i<=5; i++)
// {

//     (function(i){
//         setTimeout(() => {
//             console.log(i);
//         }, 2000);
//     })(i)
// }


// function news(i){
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }

// news(6);



// function news1(i){ // 0
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }

// function news2(i){ // 1
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }


// function upperCase(name){

//     let str = '';

//     for(let i = 0; i < name.length; i++){
//         str += String.fromCharCode(name.charCodeAt(i) - 32)
//     }

//     console.log(str);



// };


// upperCase('yuvraj');



/////   function   //// 


// function login(username){

//     console.log(username,'logged in successfilly');

// }

// login('yuvraj');


// function calculatearea(width,height){
//         console.log(width*height);

// }


// calculatearea(30,40)



// function download(){
//     var lt = 'hi';
//     console.log(lt);
// }
// download();

// link = () => {
//     console.log('hii');
// }

// function fn(x, link)

// fn(10)


function format(text,text1){
    return text1 ===:text.toUpperCase();
}

let rt = format('hello');

console.log(rt);
