let arr = [4, 5, 6, 7, 8]

//! SLICE
console.log(arr.slice(1,2))
// * => [5]
console.log(arr.slice(-1))
// * => [8]; return last element of a array
console.log(arr)
// * => [4, 5, 6, 7, 8]

//! Array.slice(x,y) => 
//* returns array starting from x (included) until y (not included), 
//* if y is omitted it will co till the end of array
//* does not mutate original array

//! SPLICE
console.log(arr.splice(2))
//* =>  [6, 7, 8]
console.log(arr)
//* => [4, 5]
arr = [4, 5, 6, 7, 8]
console.log(arr.splice(-1))
// * => [8]; return and remove last element of an array


//! Array.splice(x,y) => 
//* returns array starting from x (included) plus y number of array items, 
//* if y is omitted it will co till the end of array
//* it does mutate original array

// ! CONCAT
arr = [4, 5, 6, 7, 8]
console.log(arr.concat([9,10]))
//* =>  [4, 5, 6, 7, 8, 9, 10]
console.log(arr)
// * => [4, 5, 6, 7, 8]

// ! JOIN 
arr = [4, 5, 6, 7, 8]
console.log(arr.join("-"))
//* =>  4-5-6-7-8
console.log(typeof arr.join("-"))
//* =>  string
console.log(arr)
//* =>  [4, 5, 6, 7, 8]

// ! AT
console.log(typeof arr.at(1))
// * => 5, number

//! POP
arr = [4, 5, 6, 7, 8]
console.log(arr.pop())
// * => 8
console.log(arr)
// * [4, 5, 6, 7]

// ! PUSH
arr = [4, 5, 6, 7, 8]
console.log(arr.push(9))
// * => 6; number of element after addidng 9
console.log(arr)
// * => (6) [4, 5, 6, 7, 8, 9]

// !UNSHIFT
arr = [4, 5, 6, 7, 8]
console.log(arr.unshift(3))
// * => 6; number of element after adding 3
console.log(arr)
//*  => (5) [3, 4, 5, 6, 7, 8]


// ! SHIFT
arr = [4, 5, 6, 7, 8]
console.log(arr.shift())
// * => 4; number of element after removing first element
console.log(arr)
//* =>  (4) [5, 6, 7, 8]
