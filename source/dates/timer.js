

//* setTimeout(callback, milliseconds, argumentsForCallback)

const ingredients = [
    'spinach', 'mushrooms'
]
const orderPizza = setTimeout((argOne, argTwo) => console.log(`Your Pizza with ${argOne} and ${argTwo} is done. Enyoj!`), 
    3000, 
    ...ingredients)
console.log(`Waiting...`);

if(ingredients.includes('spinach')) {
    clearTimeout(orderPizza)
    console.log('your order is canceled ')
};

// ! Interview question
console.log("One")
setTimeout(()=> console.log("Two"), 3);
setTimeout(()=> console.log("Three"), 0);
console.log("For")

// * One
// * For
// * Three
// * Two

// * setTimeout() are being put in callback Queue, and will be resolved once call stack is completely empty
// * order of function from callback queue is resolved by which one is done (in this case timer expaires and function is being called) first.

// ! setInterval

setInterval((argOne)=> console.log(`${argOne} ${new Date().getSeconds()}`), 1000, 'hello')
console.log('2'.padStart(3,0))