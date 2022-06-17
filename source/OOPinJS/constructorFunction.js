// ! this mechanism is how inheritance in constructor function and ES clases works 
// ! that is way we say ES clases are just syntactic sugar (layer of abstruction over constructor function) 

// * STEP ONE - person constructor function; parent 
const Person = function(firstName, lastName, birthYear){
    this.firstName = firstName
    this.lastName =  lastName
    this.birthYear = birthYear 
}
// * STEP TWO - adding calcAge on  constructor function prototype property
Person.prototype.calcAge = function(){
    return new Date().getFullYear() - this.birthYear;
}

// * STEP THREE - person constructor function; child
const Student = function(firstName, lastName, birthYear, course){
    // this.firstName = firstName //! duplication
    // this.lastName =  lastName //! duplication
    // this.birthYear = birthYear  //! duplication

    // * STEP FOR - calling Person as regular function so we nned to set manually this keyword
    Person.call(this, firstName, lastName, birthYear)
    this.course = course
}

//* STEP FIVE -  Student.prtotype should be an object that inherits from Person.prototype
Student.prototype = Object.create(Person.prototype)

// * STEP SIX - adding methods specific for Student.prototype 
// * if order of step 5 and 6 were switched Object.create will just overwrite introduce method
Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

// * checking
const mike = new Student("Mike", "Leban", 1990, "CS")
console.log(mike)
mike.introduce()
console.log(mike.calcAge())

