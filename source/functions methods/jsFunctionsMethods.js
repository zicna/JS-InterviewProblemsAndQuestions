'use strict';

// * practising call, apply, bind functions methods

// setup

const lufthansa = {
    airLine: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(23, "Mix");
lufthansa.book(233, "Bix");

console.log(lufthansa.bookings)

const eurowings = {
    airLine: "Eurowings",
    iataCode: "EW",
    bookings: []
}

//* possible because JS has first class function;
const makeBooking = lufthansa.book;

// * call()

makeBooking.call(lufthansa, 23, "Emix");
makeBooking.call(eurowings, 23, "Emix");

// * apply()
// * same as call but after setting keyword this it takes array of arguments and NOT each argument individually
makeBooking.apply(lufthansa, [333, "John Do"])

// * bind()

const makeBookingEW = lufthansa.book.bind(eurowings);

makeBookingEW(111, "Matilda");

