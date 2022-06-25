const obj = { one: [1, 2, 3, 4, 5, 6] }

const objOne = {}

const first = obj.one[0]
const firstOne = objOne.one?.[0] //=> undefined
// const firstOne = objOne.one?.[0] //=> error

console.log(first, firstOne)
