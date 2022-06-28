console.log("hello from export")

export const allUsers = [];

 class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

function printName(user){
    console.log(`My name is ${user.name}`)
}

function addUser(user){
    allUsers.push(user)
}

function printAllUsers(){
    if(allUsers.length == 0){
        console.log("no users found")
        return;
    }
    for(const user of allUsers){
        console.log(`${user.name}`)
    }
}

export {printName, addUser, printAllUsers};
export default User;

