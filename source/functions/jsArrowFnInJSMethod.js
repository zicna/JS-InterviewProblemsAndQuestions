// * creating property on global, Window object
first_name = 'Hello'
last_name = 'World'

const person = {
  first_name: 'John',
  last_name: 'Do',

  // full_name: function(){
  //     console.log(`${this.first_name} ${this.last_name}`)
  // }

//   full_name(){
//       console.log(`${this.first_name} ${this.last_name}`)
//   }
  full_name: () => {
    console.log(`${this.first_name} ${this.last_name}`)
  },
}

const personCopy = {
  first_name: 'Janne',
  last_name: 'Dough',
}

person.full_name()
person.full_name.call(personCopy)
