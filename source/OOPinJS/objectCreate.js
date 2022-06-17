// * parent class prototype
const PersonProto = {
    calcAge(){
        return new Date().getFullYear() - this.birthYear;
    },

    init(firstName, lastName, birthYear){
        this.firstName = firstName;
        this.lastName = lastName
        this.birthYear = birthYear
    }
}

// * child class prototype
// * creating an empty object with __proto__ property of PersonProto 
const StudentProto = Object.create(PersonProto)
// * creating john object with __proto__ property of StudentProto
// * With this prototype chain is established 

StudentProto.init = function(firstName, lastName, birthYear, course){
    PersonProto.init.call(this, firstName, lastName, birthYear)
    this.course = course
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const john = Object.create(StudentProto)

john.init("John", "Do", 1990, "CS")
john.introduce()




// StudentProto.prototype = Object.create(PersonProto)

// const john = Object.create(StudentProto);
// john.init("John", "Do", 1990);

// console.log(john.calcAge())
