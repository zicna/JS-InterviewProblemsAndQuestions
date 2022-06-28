import User, {printName} from './user.js'

console.log('hello from import')

const milan = new User('Milan', 35)

console.log(milan)

printName(milan)
