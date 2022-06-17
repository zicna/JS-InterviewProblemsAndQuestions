'use strict'

// * setters and getters of a regular object
// ! setterrs and getters allow us to use methods as properties
const account = {
  firstName: 'John',
  lasName: 'Do',
  transactions: [20, 48, 90, 87, 100, 35],

  get latest() {
    return this.transactions.slice(-1).pop()
  },

  set latest(num) {
    this.transactions.push(num)
  },
}

console.log(account.transactions)
console.log(account.latest)
account.latest = 24
console.log(account.latest)
console.log(account.transactions)
