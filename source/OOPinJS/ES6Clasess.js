class PersonCL{
    constructor(firstName, lastName, birthYear){
        this.firstName = firstName
        this.lastName = lastName
        this.birthYear = birthYear
    }

    calcAge(){
        return new Date().getFullYear() - this.birthYear;
    }

    set _firstName(_firstName){
        this.firstName = _firstName
    }

    get _firstName(){
        return this.firstName;
    }
}

const john = new PersonCL("John", "Do", 1990);
// * using setters and getters
console.log(john._firstName)
console.log(john.calcAge())
john._firstName = 'Johny'
console.log(john._firstName)

// * checking for john prototype and john.__proto__ property
console.log(john.__proto__) 
console.log(john.__proto__ === PersonCL.prototype) // => true