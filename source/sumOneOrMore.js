//! Napisite sum metodu koja ce raditi pravilno kada je pozovete koristeci neku od sintaksi ispod
//! console.log(sum(2,3));   // Outputs 5
//! console.log(sum(2)(3));  // Outputs 5



function sum(x, c) {
  if (Object.values(arguments).length == 1) {
    return function (c) {
      return c + x;
    }
  } else {
    return x + c
  }
}



console.log(sum(2, 3))
console.log(sum(2)(3))
// * in secont case you need function that will return a function (higher order function)
// * function that we are returning will have access to both parameters duo too closure, I think : ))
