

//! array           method      return          original array
[4, 5, 6, 7, 8].push(9);//      6(new length)   [4, 5, 6, 7, 8, 9]
[4, 5, 6, 7, 8].unshift(3);//   6(new length)   [3, 4, 5, 6, 7, 8]
[4, 5, 6, 7, 8].pop();  //      8(element)      [4, 5, 6, 7]
[4, 5, 6, 7, 8].shift();//      4(element)      [5, 6, 7, 8]
[4, 5, 6, 7, 8].reverse();//    [8, 7, 6, 5, 4] [8, 7, 6, 5, 4]
[4, 5, 6, 7, 8].splice(1,2,11)

[4, 5, 6, 7, 8].at(1);//        5(element)      [4, 5, 6, 7, 8]
[4, 5, 6, 7, 8].join("-");//    4-5-6-7-8(str)  [4, 5, 6, 7, 8]

[4, 5].concat([6, 7, 8]);//     [4, 5, 6, 7, 8] [4, 5]
[...[4,5], ...[6, 7, 8]]; //    [4, 5, 6, 7, 8] [4,5] & [6,7,8]


arr = [4, 5, 6, 7, 8]
arr.splice(1,2,"new");//         [5, 6]          [4,"new",6,7,8]

[4, 5, 6, 7, 8].slice(0,2); //   [4, 5]           [4, 5, 6, 7, 8]
[4, 5, 6, 7, 8].slice(0);//      [4, 5, 6, 7, 8]  [4, 5, 6, 7, 8]


// ! ********************  forEach  *******************************************
// ! Arraylooping
[4, 5, 6, 7, 8].forEach((number, index, array) => console.log(`from ${index}: ${number * 10}`));

arr = [4, 5, 6, 7, 8];
for (const [index, number] of arr.entries()) {
    console.log(`from ${index}: ${number * 10}`);
}

// ! Map looping

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
])

currencies.forEach((value, key, map) => {
    console.log(`${key} : ${value}`)
})

//* USD : United States dollar
//* EUR : Euro
//* GBP : Pound sterling

// ! Set looping

const curr = new Set(['USD', 'RSD', 'USD', "RSD", 'EUR', 'GBP']);

curr.forEach((value, key, set) => {
    console.log(`value: ${value}; key: ${key}`)
})

//* value: USD; key: USD
//* value: RSD; key: RSD
//* value: EUR; key: EUR
//* value: GBP; key: GBP

// ! value is the same as key
// ! _varName => throwable variable in JS