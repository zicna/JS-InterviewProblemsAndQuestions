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

const john = Object.create(PersonProto);
john.init("John", "Do", 1990);

console.log(john.calcAge())
