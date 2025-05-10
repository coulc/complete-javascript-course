'use strict';

function calcAge(birthYear) {
    const age = 2025 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age},born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = "cuolc";
            const str = `Oh, and you're a millenial,${firstName}`;
            console.log(str);
            function add(a, b) {
                return a + b;
            }
            // output = "Hello world";
            const output = "hello world";
        }
        console.log(millenial);
        console.log(output);
        // add(2, 3);

    }
    printAge();
    return age;
}

const firstName = "king";

calcAge(1995);

// console.log(age);
// printAge();



console.log("------------------------");

// Variables
console.log(a);

// console.log(b);   ReferenceError
// console.log(c);   ReferenceError
var a = 1;
let b = 2;
const c = 3;

// Functions
console.log(addDecl(1,2));
// console.log(addExpr(1,2));  -> console.log(undefined(1,2));
// console.log(addArrow(1,2));  

function addDecl(a,b){
    return a + b;
}

var addExpr= function(a,b){
    return a + b;
}

const addArrow = (a,b) => a + b;

console.log("------------------------");

// Example 
if(!numProducts) deleteShoppingCart();   // !undefined  -> true

var numProducts = 10; 

function deleteShoppingCart(){
    console.log("All products deleted!");
}


var x = 1; 
let y = 2;
const z = 3;
console.log(x === window.x); // true
console.log(y === window.y); // fallse
console.log(z === window.z); // false

console.log("------------------------");

console.log(this);
function testOne(){
    console.log(this);
}
testOne();

const testTwo = () => {
    console.log(2025 - 2007);
    console.log(this); 
}
testTwo();

const coulc = {
    year: 2007,
    calcAge: function(){
        console.log(this);
        console.log(2025 - this.year);
    },
}
coulc.calcAge();

const testMan ={
    year: 2000,
}
testMan.calcAge = coulc.calcAge;
testMan.calcAge();

const f = testMan.calcAge;
// f();  Error,not year

console.log("------------------------");

// var firstNameTwo = "coulc";   =>  window.firstNameTwo 

const p1 = {
    firstNameTwo: "p1",
    year: 1996,
    calcAge: function(){
        console.log(this);
        console.log(2025 - this.year);
        /* 
        const self = this;
        const isMillenial = function(){
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenial();
        */
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstNameTwo}`),

}
p1.greet();
p1.calcAge();

console.log("------------------------");

// arguments keyword
const testMetOne = function(a,b){
    console.log(arguments);
    return a + b;
}
testMetOne(1,2);
testMetOne(1,2,123,1,23,123,13,123);

const testMetTwo = () => {
    console.log(arguments);
    return a + b;
}
// testMetTwo(1,2); // error 

console.log("------------------------");

let lastNameTwo = 'Williams';
let oldLastName = lastNameTwo;
lastNameTwo = 'Davis';
console.log(lastNameTwo,oldLastName);

const p2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family:['Alice','John'],
}
const p3 = p2;
p3.lastName= 'Davis';
console.log(p2);
console.log(p3);

console.log('---');

const p2Copy = Object.assign({},p2);
p2Copy.lastName = 'sivaD';
console.log(p2);
console.log(p2Copy);

p2Copy.family.push('Peter');
p2Copy.family.push('Bob');
console.log(p2);
console.log(p2Copy);
