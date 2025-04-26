/*
 * Author:  coulc 
 * Date:    2025/4/26
 * study:
 *      alert(),console.log(),
 *      variable,const,
 *      Math operators,
 *      Assignment operators,
 *      Comparison operators,
 *      type conversion,
 *      type coercion conversion,
 *      NaN,
 *      template text,
 *      if else-if else,
 *      6 falsy values:0,'',undefined,null,NaN,false,
 *      &&  || (return boolean value), & | (return 1 or 0 ),! (take the inverse value),
 *      switch,
 *      conditional operator(ternary operator)
*/

alert("hello world!");

let result = 1 + 2;
let name = 'WhoamI';

alert(name);
console.log(result);

name = "123";
// this is comment 
console.log(name);

console.log(true);
console.log(false);

let flag = true; 
if(flag){
    console.log("flag is true");
}

console.log(typeof true);
console.log(typeof "hello");
console.log(typeof 'world');
console.log(typeof 123);
console.log(typeof flag);

// undefined
let year; 
console.log(year);
console.log(typeof year);

// Unfixable bug 
console.log(typeof null);   // print:  object



const birthYear = 2007;
// birthYear  = 123;    // don't did this 
console.log(birthYear);


// old and other 
var number_one = 123;
console.log(number_one);

number_two = 321;
console.log(number_two);



const now = 2025; 
let ageCoulc = now - 2007;
console.log("The Coulc age: ",ageCoulc,"!");

const test = 100;
console.log(test * 2); // 200 
console.log(test / 50); // 2 
console.log(test ** 2);  // 10000


let firstStr = 'hello';
let lastStr = 'world';
console.log(firstStr + ' ' + lastStr); // hello world


let x = 1 + 2; 
x -=  1;  // x = x - 1; 
x += 1;  
x *= 1;
x /= 1;
x--;  // x -= 1 
x++; // x += 1


console.log(firstStr > lastStr);  // false
console.log(firstStr < lastStr); // true
console.log(1 > 2); // false
console.log(test >= 100);  // true


let isFullAge = test >= 100; // let isFullAge = true;
console.log(isFullAge);


let f,v;
f = v = 12 - 1 - 1; 
console.log(f,v); // 10 10


let n = '1' + 1;
console.log(n);  // '11'
console.log(typeof n);  // string


const asdf = 123;
console.log(Boolean(asdf));  // true

// type coercion
console.log('123' + 1);   // 1231
console.log('23' / 2);  // 11.5
console.log('23' * 2);  // 46
console.log('23' -1); // 22
console.log('20' ** 2);   // 400

console.log('1' + 1 - 1);  // '10'
console.log('10'-'4'-'3'-1+'5');  // '15'

// NaN:  not a number , NaN !== NaN
console.log(typeof NaN);  // number     
console.log(NaN + 1);  // NaN


let myName = "king";
let myJob = "Student";
let myBirthYear = 2007;
let thisYear = 2025 ;
console.log("I'm "+myName,",a " +(thisYear - myBirthYear) + " years old,my job is " + myJob + "!");

const hello = `I'm ${myName},a ${thisYear - myBirthYear} years old,my job is ${myJob}!`;
console.log(hello);

console.log('String with \n\
    multiple \n\
    lines');

    console.log(`String with 
multiple 
lines`);


    let cash = 123; 
    if(cash === 100){
        console.log("The cash === 100");
    }else if(cash === 50){
        console.log("The cash == 50");
    }else{
        console.log("The cash > 100");
    }


    console.log(Boolean(0)); // false
    console.log(Boolean(10)); // true
    console.log(Boolean('asdf')); // true
    console.log(Boolean({})); // true
    console.log(Boolean('')); // false


    let money = 0; 
    if (money){  // false
        console.log("don't spend it all!");
    }else{
        console.log("You should get a job!");
    }

let test_height; 
if(test_height){
    console.log("YAY! test_height is defined");
}else{
    console.log("test_height is undefined");
}


// '===' Do not perform forced type conversion
console.log('18' === 18); // false
console.log('18' == 18); // true 


const favourite = prompt("What's your favourite number?  "); // prompt()  return string 
alert(favourite);
alert(typeof favourite); // string

// type coercion conversion
if(favourite == 23){
    alert("The 23 is a good number!");
} 
// not perform type conversion
if(favourite !== 23) alert("^_^! Why not 23?");



console.log(true && false);  // false
console.log(true || false);  // true 

console.log(true & false);  // 0
console.log(true | false);  // 1




const day = "sunday";
switch(day) {
    case 'monday': // day === monday
        console.log("plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wedesday':
    case 'thurday':
        console.log("Write code example");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day");
}


const age = 11; 
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");
// if else 
/*
if(age >= 18){
  console.log("...");
}else{
  console.log("...");
}
*/

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);






// ---------------------- Exercise ----------------------------

// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 
*/
console.log("----- Coding Challenge #1 -----");
let markWeights = 78;  
// let markWeights = 95;
let markTall = 1.69;
// let markTall = 1.88;
let johnWeights = 92;  
// let johnWeights = 85;  
let johnTall = 1.95;   
// let johnTall = 1.76;   

let markBMI = markWeights / markTall ** 2;
let johbBMI = johnWeights / johnTall ** 2;

let markHigherBMI = markBMI > johbBMI; 
console.log(markHigherBMI);



////////////////////////////////////
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 

GOOD LUCK 
*/

console.log("----- Coding Challenge #2 -----");
console.log(`Mark's BMI: ${markBMI} , John's BMI: ${johbBMI}`);
if (markBMI > johbBMI){
    console.log(`Mark's BMI is higher than John's!`);
}else if (johbBMI > markBMI){
    console.log(`John's BMI is higher than Mark's!`);
}else{
    console.log(`They have the same BMI!`);
}



// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 
*/

let gymnasticsTeams = (96 + 128 + 89) / 3; 
let KoalasTeams = (88 + 91 + 1330) / 3 ;
if(gymnasticsTeams > KoalasTeams && gymnasticsTeams >= 100){
    console.log("gymnasticsTeams Win!");
}else if (KoalasTeams > gymnasticsTeams && KoalasTeams >= 100){
    console.log("KoalasTeams Win!");
}else if(gymnasticsTeams < 100 && KoalasTeams < 100 ){
    console.log("You all lost");
}else{
    console.log("dogfall!");
}



// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

GOOD LUCK 
*/


let consumptionAmount = 123;
let tip = consumptionAmount >= 50 && consumptionAmount <= 300 ? consumptionAmount * 0.15 : consumptionAmount * 0.2;
console.log(`The consumptionAmount was ${consumptionAmount},the tip was ${tip},and the total value ${consumptionAmount + tip}`);

