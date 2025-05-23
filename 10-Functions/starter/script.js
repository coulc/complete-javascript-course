'use strict';

/*
    Author:   coulc 
    Date:     2025/5/18

    study:
        function default parameters   
        pass by value and pass by reference
        higher-order function and callbacks
        functions returning functions
        call method and apply method
        bind method
        partial application
        IIFE (immediately invoked fucntion expression)
        closures

*/

/*  function default parameters
const bookings = [];

const createBooking = function(flightNum,numPassengers=1,price=100 * numPassengers){
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH132');
createBooking('LH123',2,800);
createBooking('LH123',undefined,1000);

*/

/*   pass by value and pass by reference
const flight = 'LH234';

const user = {
    name: 'Peter',
    passport : 123,
};

const checkIn = function(flightNum,passenger){
    flightNum = 'LH99';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 123) {
        console.log('check in');
    }else{
        console.log('wrong passport');
    }
};

checkIn(flight,user);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(user);
checkIn(flight,user);

*/


/*  higher-order function and callbacks
const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
};

const upperFirstWord = function(str){
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ')
};

const transformer = function(str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`)
};

transformer('JavaScript is the best!',upperFirstWord);
transformer('JavaScript is the best!',oneWord);


const hello = function(){
    console.log('hello')
}

document.body.addEventListener('click', hello);

['Jonas','Peter','Martha','Adam'].forEach(hello);

*/


/* functions returning functions
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Peter');

greet('Hi')('Jonas');

const greet = greeting => name => console.log(`${greeting} ${name}`);

*/

/*  call method,apply method and bind method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
    },
};

lufthansa.book(321,'Jonas');
lufthansa.book(239,'Peter');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book.call(eurowings,23,'Sarah');
console.log(eurowings.bookings);

book.call(lufthansa,123,'Joy');
console.log(lufthansa.bookings);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss,583,'Mary');
console.log(swiss.bookings);



const flightData = [321,'George'];
book.apply(swiss,flightData);
console.log(swiss.bookings)

book.call(swiss,...flightData);
console.log(swiss.bookings)


const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
const bookEW = book.bind(eurowings);
bookEW(23,'Steven');;

console.log(eurowings.bookings)

const bookEW23 = book.bind(eurowings,23);
bookEW23('Jonas');
bookEW23('Martha');


lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes ++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

*/

/*   partial application
const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23);

console.log(addVAT(100));
console.log(addVAT(23));


const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

*/




/* immediately invoked fucntion expression

(function(){
    console.log('run one');
})();

(() => console.log('hello'))();

*/


const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);


// example 1
let f; 

const g = function () {
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    }
}
g();
f();
console.dir(f);
h();
f();
console.dir(f);


// example 2
const boardPassengers = function(n,wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups,each with ${perGroup} passengers`);
    },wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}
boardPassengers(181,3);

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        typeof answer === 'number' && answer < this.options.length && answer >= 0  &&this.answers[answer] ++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type='array'){
        if(type === 'array') {
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll resuls are ${this.answers.join(', ')}`);
        }
    },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


poll.displayResults.call({answers:[5,2,3]},'string');
poll.displayResults.call({answers:[1,5,3,9,6,1]});


// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

*/



// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click',function(){ header.style.color='blue'});
})();

*/
