console.log("hello from export")

 class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

function printName(user){
    console.log(`My name is ${user.name}`)
}

export {printName};
export default User;

