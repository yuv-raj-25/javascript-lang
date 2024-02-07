const myName = "YUVRAJ     ";
const myName2 = "yuvraj     ";

// console.log(myName.trim().length);
// console.log(myName.truelength);

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
    // thi 
}

Array.prototype.heyyuvi = function(){
    console.log(`yuvi say hello and this hello is omly present in the Array not in the object `);
}

// console.log(heroPowers.ironMan);
// console.log(heroPowers.thor);
// console.log(heroPowers.getironManPower());

// heroPowers.marvel()
// myHeros.marvel()




