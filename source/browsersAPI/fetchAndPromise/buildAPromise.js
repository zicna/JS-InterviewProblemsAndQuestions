// const lottery = new Promise((resolve, reject) => {
//   if (Math.random() >= 0.5) resolve('You won!!!')
//   else reject(new Error('you lost all your maoney'))
// })

// // console.log(lottery)
// // ! Consuming an Promise
// lottery
//   .then((resolvedValue) => console.log(resolvedValue))
//   .catch((errorValue) => console.log(errorValue.message))

//* Promisifying setTimeout function

const wait = function (seconds) {
  return new Promise(function (resolve){
    setTimeout(() => resolve("hello"), seconds * 1000)
  })
}

// console.log(wait(1))
wait(2)
  .then((resolvedValue) => {
    console.log(`${resolvedValue} I waited for 2 seconds`)
    return wait(1)
  })
  .then(() => console.log('I waited for 1 seconds'))
