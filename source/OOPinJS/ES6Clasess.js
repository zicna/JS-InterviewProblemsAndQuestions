// * parent class
class PersonCL{
    constructor(firstName, lastName, birthYear){
        this.firstName = firstName
        this.lastName = lastName
        this.birthYear = birthYear
    }

    calcAge(){
        return new Date().getFullYear() - this.birthYear;
    }

    set firstName(firstName){
        this._firstName = firstName
    }

    get firstName(){
        return this._firstName;
    }
}

// * child class

class StudentCL extends PersonCL{
    constructor(firstName, lastName, birthYear, course){
        // ! MUST happen first, responsible for creating this keyword in subclass
        // ! if there are no new properties in child class we can ommit constructor method
        super(firstName, lastName, birthYear)
        this.course = course
    }

    introduce(){
        console.log(`Hello, my name is ${this.firstName} and I study ${this.course}`)
    }
}



const john = new StudentCL("John", "Do", 1990, "Math");
// * using setters and getters
console.log(john._firstName)
console.log(john.calcAge())
john._firstName = 'Johny'
console.log(john._firstName)
john.introduce();


// * checking for john prototype and john.__proto__ property
console.log(john.__proto__) 
console.log(john.__proto__ === PersonCL.prototype) // => true
