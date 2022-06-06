

let b;
const a = function(){
    const aVar = 23;
    b = function(){
        console.log(aVar * 2);
    }
}

a();
b();
console.dir(b)

//! [[Scopes]]: Scopes[3]
//! 0: Closure (a) {aVar: 23}

const z = function(){
    const zVar = 100;
    b = function(){
        console.log(zVar * 10);
    }
}

z();
b();
console.dir(b);

//! [[Scopes]]: Scopes[3]
//! 0: Closure (z) {zVar: 100}