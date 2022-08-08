"use strict"
const jonas ={
  firstName: "Jonas",
  lastName: "Jo",
  year: 1989,
  calcAge: function(){
    console.log(this);
    // console.log(new Date().getFullYear() - this.year)
  }
}

jonas.calcAge();

const matilda ={
  firstName: "Matilda",
  lastName: "Do",
  year: 1999
} 

//* method borrowing

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = matilda.calcAge;
f();