// * creating property on global, Window object
first_name = 'Hello'
last_name = 'World'

const person = {
  first_name: 'John',
  last_name: 'Do',

  // full_name: function(){
  //     console.log(`${this.first_name} ${this.last_name}`)
  // }

  full_name(){
      console.log(`${this.first_name} ${this.last_name}`)
  },
  full_name_arrow: () => {
    console.log(`${this.first_name} ${this.last_name}`)
  },
}

const personCopy = {
  first_name: 'Janne',
  last_name: 'Dough',
}

// * method borrowing
personCopy.full_name = person.full_name
personCopy.full_name()

personCopy.full_name_arrow = person.full_name_arrow
personCopy.full_name_arrow()

// * this keyword in arrow function will always point to the context where it is created
// * and it will not change depending of who is calling the method


