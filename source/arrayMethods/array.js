
//! array           method          return              original array
[4, 5, 6, 7, 8].push(9);//          6(new length)       [4, 5, 6, 7, 8, 9]
[4, 5, 6, 7, 8].unshift(3);//       6(new length)       [3, 4, 5, 6, 7, 8]
[4, 5, 6, 7, 8].pop();  //          8(element)          [4, 5, 6, 7]
[4, 5, 6, 7, 8].shift();//          4(element)          [5, 6, 7, 8]
[4, 5, 6, 7, 8].reverse();//        [8, 7, 6, 5, 4]     [8, 7, 6, 5, 4]
[4, 5, 6, 7, 8].splice(1,2,11)  
  
[4, 5, 6, 7, 8].at(1);//            5(element)           [4, 5, 6, 7, 8]
[4, 5, 6, 7, 8].join("-");//        4-5-6-7-8(str)       [4, 5, 6, 7, 8]
  
[4, 5].concat([6, 7, 8]);//         [4, 5, 6, 7, 8]      [4, 5]
[...[4,5], ...[6, 7, 8]]; //        [4, 5, 6, 7, 8]      [4,5] & [6,7,8]
  
arr = [4, 5, 6, 7, 8]  
arr.splice(1,2,"new");//             [5, 6]              [4,"new",6,7,8]
[4, 5, 6, 7, 8].slice(0,2); //       [4, 5]              [4, 5, 6, 7, 8]
[4, 5, 6, 7, 8].slice(0);//          [4, 5, 6, 7, 8]     [4, 5, 6, 7, 8]
  
[4, 6, 8, 10].map(i => i/2);//       [2, 3, 4, 5]        [4, 6, 8, 10]
[4, 6, 8, 10].filter(i => i >5); //  [8, 10]             [4, 6, 8, 10]
[4, 6, 8, 10].reduce((acc, curr) => acc + curr); // 28   [4, 6, 8, 10]
[4, 6, 8, 10].find(i => i > 5);//       6                [4, 6, 8, 10]
[4, 6, 8, 10].findIndex(i => i ==8);//  2                [4, 6, 8, 10]
[4, 6, 8, 10].findIndex(i => i ==11);//-1                [4, 6, 8, 10]
[4, 6, 8, 10].some(i => i > 10); //     false            [4, 6, 8, 10]
[4, 6, 8, 10].every(i => i > 2);//      true             [4, 6, 8, 10]
// !ES 2019
[[1, 2], [3, 4]].flat()// 1 default    [1, 2, 3,4]       [[1, 2], [3, 4]]
[[1,2,[3]], [[[4]]]].flat(3); //       [1, 2, 3,4]       [[1,2,[3]], [[[4]]]]   
[1, 2, 3, 4].flatMap(i => [i,i * 2]);//[1, 2, 2, 4, 3, 6, 4, 8] [4, 6, 8, 10]
// ! SORTING => mutates original array
["Alen", "John", "Kenny", "Alex", "Bety"].sort();// ['Alen', 'Alex', 'Bety', 'John', 'Kenny']
[1, 2, 3, 4, 33, 11, 22].sort();// [1, 11, 2, 22, 3, 33, 4] 
[1, 2, 3, 4, 33, 11, 22].sort((curr, next) => curr - next);// [1, 2, 3, 4, 11, 22, 33]
[1, 2, 3, 4, 33, 11, 22].sort((curr, next) => next - curr);// [33, 22, 11, 4, 3, 2, 1]


// ! ********************  forEach looping *******************************************
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
currencies.forEach((value, key, map) => console.log(`${key} : ${value}`));
//* USD : United States dollar
//* EUR : Euro
//* GBP : Pound sterling

// ! Set looping
const curr = new Set(['USD', 'RSD', 'USD', "RSD", 'EUR', 'GBP']);
curr.forEach((value, key, set) => console.log(`value: ${value}; key: ${key}`));
//* value: USD; key: USD
//* value: RSD; key: RSD
//* value: EUR; key: EUR
//* value: GBP; key: GBP

// ! value is the same as key
// ! _varName => throwable variable in JS

// ! ******************** CREATING AN ARRAY *******************************************
// * Array literal
const arrLiteral = [1, 2, 3, 4, 5];
// * Array constractor
const arrConstractor = new Array(1,2,3,4,5);
const arrOneElement = new Array(7); // [empty × 7]

// * Array constractor + fill()
//* arrWithFill.fill(item, start, end); fill with item, [start, end)
const arrWithFill = new Array(5);
arrWithFill.fill(1, 2, 4); // [1, 1, 1, 1, 1]

// * Array constractor with from()
// ! no NEW keyword
const arrFrom = Array.from({length: 5}, (item, index) => index);
