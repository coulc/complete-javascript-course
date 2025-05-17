'use strict';

/*
    Author:   coulc 
    Date:     2025/5/16

    study:
        Array Destructuring
        Object Destructuring
        Spread Operator ... 
        short circuiting  ||  && 
        nullish coalescing operator  ??   (Nullish: undefined,null (NOT 0 or ''))
        for-of
        ES6 enhanced object literals 
        WITH optional chaining   ?
        property NAMES and property VALUES
        Set 
        Map
        String

*/


const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];

const openingHours = {
    [weekdays[0]]: {
        open:12,
        close:22,
    },
    [weekdays[4]]: {
        open:11,
        close:23,
    },
    [weekdays[5]]: {
        open:0,
        close:12+12,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    // ES6 enhanced object literals 
    openingHours,
    orderDelivery({starterIndex = 1,mainIndex = 1,time = '20:00',address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);    
    },
    orderPasta(ing1,ing2,ing3){
        console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`); 
    },
    orderPizza(mainIngredient,...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};


/*  fifteen
console.log('a+very+nice+string'.split ('+'));
console.log('Peter Schmedtman'.split(' '));

const [firstName,lastName] = 'Peter Schmedtman'.split(' ');
console.log(firstName);
console.log(lastName);


const newName = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const uppersName = [];
    for (const n of names) {
        // uppersName.push(n[0].toUpperCase() + n.slice(1));
        uppersName.push(n.replace(n[0],n[0].toUpperCase()) );
    }
    console.log(uppersName.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas Schmedtman');


const message = 'Go to gate 23!';
console.log(message.padStart(20,'+').padEnd(30,'+'));
console.log('Peter'.padStart(20,'+').padEnd(30,'+'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length,'*');
} 

console.log(maskCreditCard(1231231239305244));
console.log(maskCreditCard(24237460985609839680));

const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5))

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${' ✈️'.repeat(n)}`);
}

planesInLine(3);
planesInLine(4);
planesInLine(12);

*/


/*  fourteen
const airline = 'TAP Air Protugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'JonAs';
const passengerLower = passenger.toLowerCase();
const passengerCorect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorect);

function fixName(name){
    const nameLower = name.toLowerCase();
    const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
    console.log(nameCorrect);
}
fixName('peTEr');

const email = 'hello@world.com';
const loginEmail = '  Hello@WorlD.Com \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97Y';
const priceUS = priceGB.replace('Y','$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door','gate'));
console.log(announcement.replace(/door/g, 'gate'));


const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the New Aribus family.');

const checkBaggage = function(item){
    const baggage = item.toLowerCase(); 
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on borad.');
    }else {
        console.log('Weclome aboard.');
    }
}
checkBaggage('I have a laptop, some Food and a pocket knife.');
checkBaggage('Socks and cemra.');
checkBaggage('Got some snacks and a gun for protection.');

*/


/*  thirteen
const airline = 'TAP Air Protugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Protugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7)); // [4,7)

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));


const checkMiddleSeat = function(seat){
    // B and E are middle seats.
    const judgement = seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? 'yes' : 'no'
    console.log(judgement);
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


const a = new String('Peter');
console.log(a); // String {'Peter'}
console.log(typeof a); // object
console.log(typeof a.slice(-1)); // string 

*/ 

    /* twelve
const question = new Map([
    ['question','What is the best programming language in the world?'],  
    [1,'C'],
    [2,'Java'],
    [3,'Javascript'],
    [true,'Correct'],
    [false,'Try again!'],
    ['correct',3],
]);
console.log(question);

console.log(Object.entries(openingHours));
const housrMap = new Map(Object.entries(openingHours));

console.log(question.get(question));
for (const [key,value] of question) {
    typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer: '));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

*/

/*  eleven
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1,'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,protugal'));

rest
    .set('categories',['Italian','Pizzera','Vegetarian','Organic'])
    .set('open',11)
    .set('close',23)
    .set(true,'We are open :D')
    .set(false,'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;
console.log( rest.get( time >= rest.get('open') && time < rest.get('close') ) );

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
// rest.clear();
console.log(rest.size);

const arr = [1,2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'),'Heading');

console.log(rest);
*/

/*  ten 
const i = new Set(['1','123sdf',1233,null]);
console.log(i);
const orderSet = new Set(['Pasta','Pizza','Pizza','Pizza','Pizza','Risotto','Pasta']);
console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Bread'));
orderSet.add('Bread');
orderSet.add('Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for(const order of orderSet) console.log(order);

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);
console.log(new Set('Waiter','Chef','Waiter','Manager','Chef','Waiter').size);

*/


/* nine 
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

for(const day of properties){
    openStr += `${day},`;
}
console.log(openStr);


const values = Object.values(openingHours);
console.log(values);


const entries = Object.entries(openingHours);
console.log(entries);

// [key,value]
for(const [key,{open,close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/


/* eight
for (const day of weekdays){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day},we open at ${open}`);
};

console.log(restaurant.order?.(0,1) ?? 'Method does not exist.');
console.log(restaurant.orderTest?.(0,1) ?? 'Method does not exist.');

const users = [{name:'Peter',email:'test@test.com'}]
console.log(users[0]?.name ?? 'users array empty.');

*/



/* seven
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for(let i of menu) console.log(i);

//for (const item of menu.entries()) {
//    console.log(`${item[0] + 1 }: ${item[1]}`)
//}
for(const [i,el] of menu.entries()){
    console.log(`${i+1}: ${el}`);
}
console.log(restaurant.openingHours);
*/

/*  six
const rest1 = {
    nmae: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};
const rest2 = {
    nmae: 'La Piazza',
    owner: 'Giovanni Rossi',
};
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??=10;
rest2.numGuests ??=10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>'

console.log(rest1);
console.log(rest2);

*/

/*  five 
console.log(3 || 'Peter');
console.log('' || 'Peter');
console.log(true || 0 );
console.log(undefined || null);

console.log(undefined || '' || null || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(0 && 'Peter');
console.log(7 && 'Peter');
console.log('hello' && 23  && null && 'Peter');


restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');


restaurant.numGuests = 0;
const guests = restaurant.numGuests  || 10;
console.log(guests);
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/


/*  four
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza,,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);


const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

function addNumber(...args){
    let sum = 0;
    for(let i = 0 ; i < args.length ; i ++){
        sum += args[i];
    }
    return sum / args.length;
}
console.log(addNumber(2,2));
console.log(addNumber(4,6,5,5));

const x = [2,123,1,24];
console.log(addNumber(...x));

restaurant.orderPizza('mushrooms','onion','olives','spinach');
restaurant.orderPizza('mushrooms');

*/ 

/* three
const arr = [1,2,3];
const badNewArr = [5,4,...arr];
console.log(badNewArr);

console.log(...arr);

const newMenu = [...restaurant.mainMenu,'Gnocci']
console.log(newMenu);


const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str,'','S.'];
console.log(letters);
console.log(...str);


const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt("Ingredient 2?"),
    prompt("Ingredient 3?"),
];

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);


const newRestaurant =   {
    foundedIn: 1998,
    ...restaurant,
    founder: 'Guiseppe',
};
console.log(newRestaurant);


const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/* two
restaurant.orderDelivery({
    time:'12:00',
    address:'Via del Sole,21',
    starterIndex:1,
    mainIndex:1,
});

restaurant.orderDelivery({
    address:'Via del Sole,22',
})


const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const {
    name:restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;

console.log(restaurantName,hours,tags);

const {
    menu = [],
    starterMenu: starters = []
} = restaurant;
console.log(menu,starters);


let {a,b} = [1,2];
const obj = {
    a:123,
    b:321,
    c:213,
};
({a,b} = obj);
console.log(a,b);


const {fri:{open:o,close:c}} = openingHours;
console.log(o,c);

*/


/* 
 * one 
const a = [1,2,3];
const tempA = a[0];
const [x,y,z] = a;
console.log(tempA);
console.log(x,y,z);

let [main,,secondary] = restaurant.categories;
console.log(main,secondary);

[main,secondary] = [secondary,main];  
console.log(main,secondary);

const [starter,mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);


const nested =  [1,2,[23,65]];
const [i,,j] = nested;
console.log(i,j);
const [p,,[r,w]] = nested;
console.log(p,r,w);

const [as,df,rr=1] = [8,9]; 
console.log(as,df,rr);

const [sa,re] = [1];
console.log(as,re);
*/



///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

*/

/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// const player1 = [...game.players[0]];
// const player2 = [...game.players[1]];
const [player1,player2] = game.players;
console.log(player1,player2);

const [gk,...fieldPlayers] = player1;
const [gk2,...fieldPlayers2] = player2;


const allPlayers = [...player1,...player2];
console.log(allPlayers);

const players1Final = [...player1,'Thiago','Coutinho','Perisic'];
console.log(players1Final);

const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2);  

function printGoals(...players) {
    console.log(players);
    console.log(`${players.length} goals werer scored!`);    
}
printGoals(...game.scored);


team1 < team2 && console.log('Team1 is more likely to win.');
team2 < team1 && console.log('Team2 is more likely to win.');
team2 === team1 && console.log('draw.');


*/


// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for(const [index,player] of game.scored.entries()){
    console.log(`Goal ${index + 1}: ${player} `);
}



let sum = 0;
const odds = Object.values(game.odds);
for(const odd of odds){
    sum += odd;
}
console.log(sum / odds.length);



for(const [team,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]};`
    console.log(`Odd of ${teamStr} ${odd}`);
}

const scores = {};
for(const player of game.scored){
    scores[player] ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);

*/




// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/* 

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set([...gameEvents.values()]);
console.log(events);


gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes` )
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes` )

for (const [min,value] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${value}`);
}

*/


// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for(const [i,row] of rows.entries()) {
        const [first,second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
*/


const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights);

const getCode = str => str.slice(0,3).toUpperCase();
for (const flight of flights.split('+')) {
    const [type,from,to,time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`;
    console.log(output.padStart(36));
    
}


