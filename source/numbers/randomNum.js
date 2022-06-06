
const randomInt = (min, max) => Math.floor((Math.random() * (max - min) + 1) + min);

// example min = 2; max =11;
// ! part of function                                           general range               example min = 2, max = 11
// 1. Math.random() =>                                          0 ... 0.99999               0 ... 0.99999 
// 2. Math.random() * (max - min) =>                            0 ... ~(max - min)          0 ... 8.99999
// 3. Math.random() * (max - min + 1) =>                        0 ... ~(max - min + 1)      0 ... 9.99999
// 4. Math.random() * (max - min + 1) + min =>                  min.0001 ... ~ max + 1      2 ... 11.9999
// 5. Math.floor(Math.random() * (max - min + 1) + min) =>      min ... max                 2 ... 11

// ! NOTE: 
// ! step 3. 
// !        everything we are doing in parentheses is affecting ONLY max value 
// !        min value is still almost 0 since Math.random() can produce almost 0 so it doesn't matter what wi multiply it with

// ! step 4. 
// !        we can use Math.trunc() or Math.floor() interchangeable when we are dealing with positive numbers

// ! Must be careful if writing function that uses Math.round() since:
// * numbers range(0..3)        Math.round(number)      % get get a number
// * 0 ... 0.49999              0                       33 / 2             
// * 0.5 ... 1.49999            1                       33
// * 1.5 ... 2.49999            2                       33
// * 2.5 ... 3                  3                       33 / 2

// * mapping random numbers to Map object
const mapRandomNumbers = (min, max) => {
    const map = new Map();
    const randomInt = () => Math.floor((Math.random() * (max - min + 1))) + min;

    for(let i =0; i < 10000000; i++){
        let temp = randomInt();
        if(map.has(temp)){
            map.set(temp, map.get(temp) + 1)
        }else{
            map.set(temp, 1)
        }
    }
    return map;
}
console.log(mapRandomNumbers(2,11))

// * mapping random numbers to Object

const mapRandomToObject = (min, max) => {
    const obj = {};
    const randomInt = () => Math.floor((Math.random() * (max - min + 1))) + min;

    for(let i =0; i < 100000000; i++) {
        let temp = randomInt().toString();
        if(temp in obj){
            obj[temp] = obj[temp] + 1
        }else{
            obj[temp] = 1
        }
    }
    return obj;
}

console.log(mapRandomToObject(2,11))
