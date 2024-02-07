const myName = "YUVRAJ     ";
const myName2 = "yuvi";

// console.log(myName.trim().length);
// console.log(myName.trueLength);

String.prototype.trueLength = function(){
    // console.log(this);
    console.log(`the true length is ${this.trim().length}`);
}

con

myName.trueLength()
myName2.trueLength()

let myHeros = ["thor" , "ironMan"]


let heroPowers = {
    thor: 'Hammer',
    ironMan: 'armour ',

    getironManPower: function(){
            console.log(`ironMan powers is ${this.ironMan}`);
    }
}

Object.prototype.marvel = function (){
    console.log(`marvel is present in all objects `);
    // this is objects is present in the both arrry and objects also
}

Array.prototype.heyyuvi = function(){
    console.log(`yuvi say hello and this hello is omly present in the Array not in the object `);
}

// console.log(heroPowers.ironMan);
// console.log(heroPowers.thor);
// console.log(heroPowers.getironManPower());

// heroPowers.marvel()
// myHeros.marvel()
// myHeros.heyyuvi()
// heroPowers.heyyuvi()  // this will cause an error 


// inheritance 




