//! parent class mammalia
// * properties: fur, glands, legs
// * methods : run

//! child class rodentia
// * properties: tail
// * methods: transfer disease
// * ****************************************************
console.log("Hello from practise OOP")
// ! constructor function implementation
// your code goes here
// *parent class
const MammaliaCF = function(fur, glands, legs){
    this.fur = fur
    this.glands = glands
    this.legs = legs
}

MammaliaCF.prototype.run = function(){
    console.log(`I am mammal and I am running on my ${this.legs} legs.`)
}

const mammal = new MammaliaCF("brown", 2, 4)
mammal.run()
// * child class

const RodentiaCF = function(fur, glands, legs, tail){
    MammaliaCF.call(this, fur, glands, legs)
    this.tail = tail
}

RodentiaCF.prototype = Object.create(MammaliaCF.prototype);

RodentiaCF.prototype.transferDisease = function(){
    console.log("if I bite you you will get sick")
}


const rodent = new RodentiaCF("brown", 2, 4, "long tail")
console.log(rodent)
rodent.run()
rodent.transferDisease()

// ! ES 6 class 
// your code goes here

class MammaliaES6{
    constructor(fur, glands, legs){
        this.fur = fur;
        this.glands = glands;
        this.legs = legs;
    }

    run(){
        console.log(`I am mammal and I am running on my ${this.legs} legs.`)
    }
}

class RodentiaES6 extends MammaliaES6{
    constructor(fur, glands, legs, tail){
        super(fur, glands, legs)
        this.tail = tail;
    }
    transferDisease = function(){
        console.log("if I bite you you will get sick")
    }
}

const rodentES6 = new RodentiaES6("black", 2, 4, "short fat")
console.log(rodentES6)
rodentES6.run()
rodentES6.transferDisease()


// ! Object.create
// your code goes here
// * parent class
const MammaliaProto = {
    run(){
        console.log(`I am mammal and I am running on my ${this.legs} legs.`)
    },
    init(fur, glands, legs){
        this.fur = fur;
        this.glands = glands;
        this.legs = legs
    }
}

const m = Object.create(MammaliaProto)
m.init("black", 2, 4)
console.log(m)

// * child class

RodentiaProto = Object.create(MammaliaProto)

RodentiaProto.init = function(fur, glands, legs, tail){
    MammaliaProto.init.call(this, fur, glands, legs)
    this.tail = tail;
}

RodentiaProto.transferDisease = function(){
    console.log("if I bite you you will get sick")
}

const rodentOC = Object.create(RodentiaProto) 
rodentOC.init("black", 2, 4, "short fat")
console.log(rodentOC)






