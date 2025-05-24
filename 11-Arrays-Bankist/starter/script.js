'use strict';

/*
    Author:   coulc 
    Date:     2025/5/18

    study:
        String method: slice() split() reverse() concat() join() 
        ForEach
        Array method: at() map() filter() reduce() some() every() flat() flatMap() sort() fill() from()
        Array.from() 



*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3332,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = (movements,sort = false) => {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

    movs.forEach((mov,i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
          <div class="movements__value">${mov} €</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin',html);
    });

}


const calcDisplayBalance = account => {
    account.balance = account.movements.reduce((aur,mov) => aur + mov,0);
    labelBalance.textContent = `${account.balance} €`; // €
};


const createUsernames = function(accs){
    accs.forEach(acc => {
        acc.username = acc.owner.
            toLowerCase()
            .split(' ')
            .map(name => name.at(0))
            .join('');
    });
};
// const createUsernames = accs => accs.forEach(acc => { acc.username = acc.owner.toLowerCase().split(' ').map(name => name.at(0)).join(''); });
createUsernames(accounts);

const updateUI = currentAccount => {

    displayMovements(currentAccount.movements);

    calcDisplayBalance(currentAccount);

    clacDisplaySummary(currentAccount);
}



const clacDisplaySummary = function(account){
    const incomes = account.movements.filter(mov => mov > 0)
        .reduce((acc,mov) => acc + mov,0);    
    labelSumIn.textContent = `${incomes}€`;
     
    const out = account.movements.filter(mov => mov < 0)
        .reduce((acc,mov) => acc + mov , 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = account.movements.filter(mov => mov > 0)
        .map(deposit => (deposit * account.interestRate) / 100)
        .filter((inte,i,arr) => inte >= 1)
        .reduce((acc,inte) => acc + inte,0);

    labelSumInterest.textContent = `${interest}€`;
}



let currentAccount;
btnLogin.addEventListener('click', e => {
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    if(currentAccount?.pin === Number(inputLoginPin.value)){
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

        containerApp.style.opacity = 100;

        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        updateUI(currentAccount);
    }else{
        containerApp.style.opacity = 0;
        inputLoginPin.blur();
    }
    inputLoginUsername.value = inputLoginPin.value = '';
});




btnTransfer.addEventListener('click', e => {
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if(amount > 0 && receiverAcc &&receiverAcc?.username !== currentAccount.username && currentAccount.balance >= amount){
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        updateUI(currentAccount);
    }
})



btnClose.addEventListener('click', e =>{
    e.preventDefault();

    if(inputCloseUsername.value === currentAccount.username 
        && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);

        accounts.splice(index,1);

        containerApp.style.opacity = 0;

        labelWelcome.textContent = 'Log in to get started';
    }



    inputCloseUsername.value = inputClosePin.value = '';
})



btnLoan.addEventListener('click', e => {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);
    
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }

    inputLoanAmount.value = '';

})


let sorted = false;
btnSort.addEventListener('click', e => {
    e.preventDefault();
    sorted = !sorted;
    displayMovements(currentAccount.movements,sorted);
})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////

/*

let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));


console.log(arr.splice(2));
console.log(arr);

const arr2 = [...arr];
console.log(arr2)
console.log(arr2.reverse());
console.log(arr2)

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

console.log(letters.join('-'));


const arr3 = [23,11,64];
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3[arr.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.slice(-1));
console.log(arr3.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at());

console.log('-----------');

const m = [200, 0,12323,-200, 340, -300, -20, 50, 400, -460,0];
for(const [i,movement] of m.entries()){
    if (movement === 0) {
        console.log('zero??');
        continue;
    };
    if(movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    }else{
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    };
};

console.log('-----FOREACH-----');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function(mov,i,arr){
    if(mov > 0){
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    }else{
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    };
});


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value,key,map)=> {
    console.log(`${key}: ${value}`) 
});

const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value,_,set) => {
    console.log(`${value}: ${value}`);
})

*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);



const movementsUSDfor = []; 
for (const mov  of movements)  movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov,i) => {
    return `Movement ${i + 1}： You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
});
console.log(movementsDescriptions);

*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if(mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrewals = movements.filter(mov => mov < 0);
console.log(withdrewals);

*/

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//const balance = movements.reduce(function(acc,cur,i,arr){
//    return acc + cur;
//},0);

const balance = movements.reduce((acc,cur) => acc + cur ,0);
console.log(balance);


*/

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const a = movements.reduce((arr,cut) => {
    return arr = cut > arr ? cut : arr;
})
console.log(a);

*/

/*
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements)
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc,mov) => acc + mov, 0);
console.log(totalDepositsUSD);

*/

/* 

const movements = [200, 450, -400, 3000, -650, -130, 70,1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

*/



/*
const movements = [200, 450, -400, 3000, -650, -130, 70,1300];
console.log(movements);

console.log(movements.includes(-130));

console.log(movements.some(mov => mov === -130))

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
*/


/*
const movements = [200, 450, -400, 3000, -650, -130, 70,1300];
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const  deposit = mov => mov > 0;
console.log(account1.movements.every(deposit));

*/

/* 
const arr = [[1,2,3],[4,5,6],7,8,9];
console.log(arr.flat());

const arrDeep = [[[1,2],3],[[4,5],6],7,8];
console.log(arr.flat(2));

const overaBalance = accounts.map(acc => acc.movements)
    .flat()
    .reduce((acc,mov) => acc + mov ,0);
console.log(overaBalance);

const overaBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc,mov) => acc + mov,0);

*/

/*

const movements = [200, 450, -400, 3000, -650, -130, 70,1300];
const owners = ['Jonas','Zach','Adam','Martha'];
console.log(owners);

console.log(movements);

console.log(movements.sort());

movements.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(movements);

movements.sort((a,b) => a - b);
console.log(movements);

movements.sort((a,b) => b - a);
console.log(movements);

*/

/*

const arr = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7,8));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

console.log(x.fill(1,3,5));  // [)
console.log(x.fill(1));

arr.fill(23,2,6);
console.log(arr);

const y = Array.from( {length:7}, () => 1);
console.log(y);

const z = Array.from({length:7} , (_,i) => i + 1);
console.log(z);

*/

labelBalance.addEventListener('click', () => {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€',''))
    );

    console.log(movementsUI);
    
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
    console.log(movementsUI2);

})


///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const checkDogs = (dogJulia,dogsKate) => {
    const dogJuliaCorrected = dogJulia.slice();

    dogJuliaCorrected.splice(0,1)
    dogJuliaCorrected.splice(-2);
    console.log(dogJuliaCorrected);

    const dogs = dogJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach((dog,i) => {
        if(dog >= 3){
            console.log(`Dog number ${i + 1} is an adult,and is ${dog} years old.`)

        }else{
            console.log(`Dog number ${i + 1} is still a puppy.`)
        }
    })
};

checkDogs([3,5,2,12,7],[4,1,15,8,3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);

*/





///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc,age) => acc + age,0) / adults.length;
    // const average = adults.reduce( (acc,age,_,arr) => acc + age / arr.length ,0);
    return average;

};
console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/


///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const calcAverageHumanAge = ages => ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc,age,i,arr) => acc + age / arr.length,0);

console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

*/

///////////////////////////////////////
// Array Methods Practice
