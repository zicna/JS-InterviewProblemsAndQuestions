class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name
    this.last_name = last_name
  }

  full_name = function() {
    // console.log(this)
    console.log(`${this.first_name} ${this.last_name}`)
}
full_name_arrow = () => {
    // console.log(this)
    console.log(`${this.first_name} ${this.last_name}`)
  }
}

class Student extends Person{
    constructor(first_name, last_name, uni){
        super(first_name, last_name)
        this.uni = uni
    }
}

const student = new Student("M", "Z", "PMF")
student.full_name()
student.full_name_arrow()

const john = new Person('John', 'Do')
john.full_name()
john.full_name_arrow()


// class PersonCopy {
//     // full_name
//   constructor(first_name, last_name) {
//     this.first_name = first_name
//     this.last_name = last_name
//   }

//   full_name =() => {
//     console.log(`${this.first_name} ${this.last_name}`)
//   }
// }

// const johnCopy = new PersonCopy('JohnCopy', 'DoCopy')
// console.dir(johnCopy)
// johnCopy.full_name()
