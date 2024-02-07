const multiplyBy5 = function(nums){
    return nums *5;
}
multiplyBy5.power = 1

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score ){
    this.username = username
    this.score = score

    return this;

}

createUser.prototype.increament = function(){
    this.score
}


// const user = new  createUser('yuvraj',99);
// console.log(user);