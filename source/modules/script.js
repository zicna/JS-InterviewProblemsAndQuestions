import User, {printName, allUsers, addUser, printAllUsers} from './user.js'

console.log('hello from import')

const milan = new User('Milan', 35)

console.log(milan)

printName(milan)

// * export / import is live connection 
console.log(allUsers) //=> []

printAllUsers();
addUser(milan)
printAllUsers();

console.log(allUsers) //=> [User]
