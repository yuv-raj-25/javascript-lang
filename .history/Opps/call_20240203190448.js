function SetUsername(username){

    this.username = username
    console.log(`function called `);
}
function CreateUser(username, email , password){

    // SetUsername(username)
    SetUsername.call(thisusername)
    this.email = email
    this.password = password
    // console.log(`user created `);
}

const data = new CreateUser('yuvraj',"yuvi@gmail.com", "001225")

console.log(data);
