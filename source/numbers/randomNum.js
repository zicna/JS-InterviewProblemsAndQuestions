
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
