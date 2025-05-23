'use strict';      // enable strict mode,must be on the frist line 

/*
    Author:   coulc 
    Date:     2025/4/26
    study:
        strict mode,
        function,
        function expression,
        arrow function,
        array,
        object,
        for,
        while,
        */

function logger(){
    console.log("hello world");
}


// logger(123);   // no errors will be reported
logger();

// ----------------------------------

function fruitProcessor(apples ,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3,0);
console.log(appleJuice);

console.log(fruitProcessor(0, 3));

// ----------------------------------

// Ordinary Function can allow calls before declaration.
// Function expression not be called without declaration.

function calcAge1(birthYear){
    let now = 2025;
    return now - birthYear;
}

const age1 = calcAge1(2007);
console.log(age1);

const calcAge2 = function(birthYear){
    let now = 2025;
    return now - birthYear;
}

const age2 = calcAge2(2007);
console.log(age2);


// ---------------------------

const calcAge3 = birthYear => 2025 - birthYear;     // one line, auto return 
let age3 = calcAge3(2007);
console.log(age3);

const yearUntilRetirement = (birthYear,firstName) => {
    const retirement = 60; 
    return `${firstName} retires in ${retirement} years`;     // multi line,manual return
}

console.log(yearUntilRetirement(2007,'coulc'));

// ---------------------------

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessorTwo(apples ,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessorTwo(3,3));


// ---------------------------

const friends =  ['Michael','Steven','Pater'];
console.log(friends);  //  ["Michael","Steven","Pater"];

const years = new Array(1999,2000,2001,2002);
console.log(years);   // [1999,2000,2001,2002]

console.log(friends[0]); // Michael
console.log(years[1]);   // 2000

console.log(friends.length);    // 3
console.log(years[years.length - 1]);  // 2002

friends[2] = 'Jay';
console.log(friends);  //  ["Michael","Steven","Jay"];


const firstName = 'Jonas';
const jonas = [firstName,'Schmedtmann',2025-2000,'teacher',friends];
console.log(jonas); //  ['Jonas', 'Schmedtmann', 25, 'teacher', Array(3)]
console.log(jonas.length); // 5

// ---------------------------

const ageOne = calcAge1(years[0]);
const ageTwo= calcAge1(years[1]);
const ageThree = calcAge3(years[years.length - 1]);
console.log(ageOne,ageTwo,ageThree);

const ages = [calcAge1(years[0]),calcAge2(years[1]),calcAge1(years[years.length - 1])];



// -----------------------------

const fs =  ['Michael','Steven','Pater'];
const fsLen = fs.push('Jay');  // Append a new element to the array and return its length.
console.log(fs);  
console.log(fsLen);    // 4

const fsNewLen = fs.unshift('John');   // Add elements at the beginning of an array,return array length.
console.log(fs);  

console.log(fs.pop());  // Remove the last element and return it.

const firstEle = fs.shift();   // Remove the frist element and return it.
console.log(fs);
console.log(firstEle);   // John



console.log(friends.indexOf('Steven'));   // reutrn index
console.log(friends.indexOf('Bob'));   // return -1,because not exist.

// return boolean value.
console.log(friends.includes('Steven'));  // true
console.log(friends.includes('Bob'));   // false


friends.push(23);
console.log(friends.includes('23')); // false,because it will not perform forced type conversion.  

if(friends.includes('Michael')){
    console.log('You have a friends called Michael.');
}




// -----------------------------
const peter = {
    firstName: 'Peter',
    lastName: 'Schmedtmann',
    age: 2025-2000,
    job: 'teacher',
    friends: ['Michael','Jonas','Steven']
};
console.log(peter);

console.log(peter.firstName);
console.log(peter['lastName']);
const nameKey = 'Name';
console.log(peter['first' + nameKey]);

const interestedIn = prompt('What do you want to know about Peter? Choose between firstName,lastName,age,job and friends');
console.log(peter.interestedIn);   // undefined
console.log(peter[interestedIn]);   


peter.location = 'China';
peter['fruit'] = 'apple';
console.log(peter);


console.log(`
    Peter has ${peter.friends.length} friends,and his best friends is called ${peter.friends[0]}.
`)




// -----------------------------

const userOne = {
    firstName: 'user',
    lastName: 'One',
    birthYear: 2000,
    job: 'teacher',
    friends: ['Michael','Jonas','Steven'],
    calcAge: function (){
        let now = 2025;
        console.log(this);
        this.isFunctionCalled = true;
        return now - this.birthYear;
    },
    isFunctionCalled: false,
    hasDriversLicense: false,
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old,and he has ${this.hasDriversLincense? 'a':'no'} driver's license. `;
    },

};

console.log(userOne.calcAge());
console.log(userOne['calcAge']());
console.log(userOne.isFunctionCalled);

console.log(userOne.getSummary());


// -----------------------------

for(let i = 0 ; i < 10 ; i ++ ){
    console.log(`Lifting weights repetition ${i+1}`);
}


// -----------------------------

console.log("-----------------");
const joansArray = [
    'Joans',
    'Schmedtmann',
    2025-2000,
    'teacher',
    ['Michael','Peter','Steven']
];
const types = [];
for(let i = 0 ; i < joansArray.length ; i ++){
    console.log(joansArray[i],typeof joansArray[i]);
    types[i] = typeof joansArray[i];
}

for(let i = 0 ; i < joansArray.length ; i ++){
    console.log(types[i],typeof types[i]);
}

const args = [];
const now = 2025;
for(let i = 0; i < years.length; i++){
    // args[i] = 2025 - years[i];
    args.push(now - years[i]);
}

for(let i = 0; i < args.length; i++){
    console.log(args[i]);
}


for(let i = 0 ; i < joansArray.length ; i++){
    if (typeof joansArray[i] !== 'string') continue;
    console.log(joansArray[i],typeof joansArray[i]);
}

console.log("----");
for(let i = 0 ; i < joansArray.length ; i++){
    if (typeof joansArray[i] !== 'number') break;
    console.log(joansArray[i],typeof joansArray[i]);
}
console.log("----");

for(let i = joansArray.length - 1; i >= 0 ; i--){
    console.log(joansArray[i],typeof joansArray[i]);
}

console.log("----");
for(let j = 0 ; j < 5; j++){
    console.log(`--------Starting exercise ${j + 1}`);
    for(let i = 0 ; i < 5 ; i ++ ){
        console.log(`Lifting weights repetition ${i+1}`);
    }
}

// -----------------------------
console.log("----");
let rep = 0 ; 
while(rep <= 10){
    console.log(`${rep}`);
    rep++;
}


console.log("-------");
let dice = Math.trunc(Math.random() * 6 ) + 1;  // 1 - 6 ,integer
console.log(dice);

while(dice !== 6){
    console.log(dice);
    dice = Math.trunc(Math.random() * 6 ) + 1;  // 1 - 6 ,integer
    if (dice === 6) {
        console.log("!!!!");
    }
}


console.log("----------------------------------------");
// ---------------------- Exercise ----------------------------

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/



const calcAverage = (a,b,c) => (a + b + c) / 3 ;
// Test1
// let gymnasticsTeam = calcAverage(44,23,71);
// let koalasTeam = calcAverage(65,54,49);

// Test2 
let gymnasticsTeam = calcAverage(85,54,41);
let koalasTeam = calcAverage(23,34,27);

function checkWinner(avgDolphins,avgKoalas){
    console.log(`DolphinsScore:${avgDolphins},KoalasSore:${avgKoalas}`);
    if (avgDolphins > 2 * avgKoalas) {
        console.log("Dolphins Win!"); 
    }else if (avgKoalas > 2 * avgDolphins) {
        console.log("Koalas Win!");
    }else{
        console.log("You all lose...");
    }
}

checkWinner(gymnasticsTeam,koalasTeam)







// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]),];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills);
console.log(tips);
console.log(total);



// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/


const mark = {
    fullName: "Mark Miller",
    weights: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.weights / (this.height * this.height);
        return this.BMI;
    }
}
const john = {
    fullName: "John Smith",
    weights: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.weights / this.height  ** 2;
        return this.BMI;
    }
}

console.log(`
    ${mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI(${mark.calcBMI()})is higher than ${john.fullName}'s BMI(${john.calcBMI()})`:`${mark.fullName}'s BMI(${john.calcBMI()})is higher than ${mark.fullName}'s BMI(${mark.calcBMI()})`}
`);

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/


const billsFour = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tipsFour = [];
const totalsFour = [];

for(let i = 0 ; i < billsFour.length ; i ++){
    tipsFour[i] = calcTip(billsFour[i]);
    totalsFour.push(billsFour[i] + tipsFour[i]); 
}

console.log(billsFour);
console.log(tipsFour);
console.log(totalsFour);


const calcAverageFour = function(arr){
    let sum = 0; 
    for(let i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverageFour(totalsFour));

