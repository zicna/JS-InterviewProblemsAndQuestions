// HTML file with NAV ->  -> div -> ul -> li
// JS file to show event, event target, current possition of event, bubbling


const randomInt = (min, max) => Math.floor((Math.random() * (max - min + 1) + min));

const linkOneElement = document.querySelector("a");
let linkOneElementEvent;
const ulElement = document.querySelector("ul");
let ulElementEvent;
const divElement = document.querySelector("div");
let divElementEvent;
const navElement = document.querySelector("nav");
let navElementEvent;

linkOneElement.addEventListener("click", function(event){
    console.log("link one ");
    console.log(this);
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);

    linkOneElementEvent = event;
    this.style.background = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
})

ulElement.addEventListener("click", function(event){
    console.log("ul was clicked ");
    console.log(this);
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);

    ulElementEvent = event;
    this.style.background = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

})

divElement.addEventListener("click", function(event){
    console.log("div el was clicked ");
    console.log(this);
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);

    divElementEvent = event;
    this.style.background = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

})

navElement.addEventListener("click", function(event){
    console.log("nav el was clicked");
    console.log(this);
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);

    navElementEvent = event
    this.style.background = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

    console.log(linkOneElementEvent === ulElementEvent)
})

