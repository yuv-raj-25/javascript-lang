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

Object.prototype.yuvraj = function (){
    console.log(``);
}


console.log(heroPowers.ironMan);
console.log(heroPowers.thor);
console.log(heroPowers.getironManPower());


