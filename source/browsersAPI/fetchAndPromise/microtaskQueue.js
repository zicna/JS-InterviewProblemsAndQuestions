//! microtask queue vs callback queue vs callstack

console.log('Start: Task One')
setTimeout(() => console.log('Task Two SetTimeout'), 0)
fetch('https://restcountries.com/v3.1/name/serbia')
  .then((response) => response.json())
  .then((data) => console.log(data))
Promise.resolve('Task Three Promise').then((res) => console.log(res))
Promise.resolve('Task For Promise').then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res)
})
console.log('End: Task Five')
