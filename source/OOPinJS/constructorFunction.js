const Person = function(firstName, lastName, birthYear){
    this.firstName = firstName;
    this.lastName = lastName
    this.birthYear = birthYear
}



const milan = new Person("Milan", "Zivkovic", 1987)
const zicko = new Person("Zile", "Zicko", 1980);
const john = new Person("John", "Do", 1990);

// console.log(milan, zicko, john)

// * adding methods 
// ! Person.prototype is NOT prototaype of Person
// ! Person.prototype is prototype of evry instance of a Person constructor function
Person.prototype.age = function(){
    return new Date().getFullYear() - this.birthYear;
}
// console.log(milan.age())

// * check if an object is an instance of a class (constructor function in this case)
// console.log(milan instanceof Person) // => true

// * checking 
// console.log(Person.prototype)
// console.log(milan.__proto__)
// console.log(milan.__proto__ === milan.constructor.prototype) //=> true
// console.log(Person.prototype.isPrototypeOf(milan))          // => true

// console.log(milan.__proto__.constructor === Person)

// ! Prototypal inheritance on Build-in Objects

const arrCon = new Array(1,2,3,4,5);

console.log(arrCon.__proto__)
console.log(arrCon.__proto__ === Array.prototype) // => true
console.log(arrCon.__proto__.__proto__)
console.log(arrCon.__proto__.__proto__ === Object.prototype)  //=> true
console.log(arrCon.__proto__.__proto__.__proto__ === null) //=> true

// * adding new method to Array prototype constructor
// ! NOT good idea : ))

const arrLiteral = [1,2,3,1,5,3,2,3,4,5,4,5,5,6,77,7,7,7,];

Array.prototype.unique = function(){
    return [...new Set(this)]
}
console.log(arrLiteral.unique())
// *********************************************************
// * DOM elements prototypal inheritance

const h1 = document.querySelector("h1");
console.log(h1.__proto__)
// ! HTMLHeadingElement
console.log(h1.__proto__.__proto__)
// ! HTMLElement
console.log(h1.__proto__.__proto__.__proto__)
// ! Element
console.log(h1.__proto__.__proto__.__proto__.__proto__)
// ! Node
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__)
// ! EventTarget
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__)
// ! Object
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__)
// ! null
// *********************************************************

// * Functions prototypal inheritance
const myFn = (x) => x + 1;
console.dir(myFn)
// !
console.dir(myFn.__proto__)
//! this where call, bind, apply methods are
console.dir(myFn.__proto__.__proto__)
// ! Object
console.dir(myFn.__proto__.__proto__.__proto__)
//! null
