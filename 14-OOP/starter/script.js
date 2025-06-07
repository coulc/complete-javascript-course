'use strict';

/*
    Author:   coulc 
    Date:     2025/6/7

    study:
        constructor functions 
        es6 classes 
        Object.create()
        fields
*/

/*
// 1. new   创建一个新的空对象{}
// 2. 然后调用该函数 并在此函数调用中设置this  = {} 这个新的对象
// 3. 这个新创建的对象会链接到原型(prototype)
// 4. 函数自动返回这个新的空对象 {} 
const Person = function(firstName,birthYear){
    console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
    // never to this
    // this.calcAge = function(){
    //     console.log(2025 - this.birthYear);
    // }
}

const person = new Person('coulc',2007);
console.log(person);

const king = new Person('king',2007);
console.log(king);
console.log(king instanceof Person);

Person.hey = function(){
    console.log('hey');
    console.log(this);
};

Person.hey(); // static method
// person.hey(); // Error


// ------------------------------------

console.log('-----------------')

// prototype
console.log(Person.prototype);
Person.prototype.calcAge = function(){
    const date = new Date();
    console.log(date.getFullYear() - this.birthYear);
}
person.calcAge();

console.log(Object.getPrototypeOf(Person));
console.log(person.__proto__);
console.log(Person.prototype);

console.log(person.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(king));
console.log(Person.prototype.isPrototypeOf(person));

Person.prototype.hello = 'hello';
console.log(king,person)
console.log(person.__proto__.hello);


// ------------------------------------

console.log('-----------------')

console.log(king.__proto__);   // Person
console.log(king.__proto__.__proto__);  // Object
console.log(king.__proto__.__proto__.__proto__);  // null

console.dir(Person.prototype.constructor);
const arr = [1,23,23,51,5,121,51,23,1,5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// ------------------------------------


console.log('-----------------')
// ES6 class

// class expression   类表达式
const animal = class {};  
  
// class declaration    类声明
class PersonCl{ 
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    };  
    // 该方法会被添加到 .prototype 中
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    };

    test() {
        console.log('test');
    };

    get age(){
        return 2025 - this.birthYear;
    };

    set fullName(name) {
        console.log(name);
        if(name.includes(' '))  this._fullName = name;
        else alert(`${name} is not a full name.`);
    };

    get fullName() {
        return this._fullName;
    };

    static hey(){
        console.log('hey');
    };

    
}

const personcl = new PersonCl('king ',2007);
personcl.calcAge();

console.log(personcl);
console.log(personcl.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
}

personcl.greet();

personcl.test();

console.log(personcl.age);

console.log(personcl.fullName);

const walter = new PersonCl('Walter White',1995);
console.log(walter);

console.log(PersonCl.hey());

console.log('-----------------')

const PersonProto = {
    calcAge(){
        console.log(2025 - this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2007;

steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const joy = Object.create(PersonProto);
joy.init('joy',2000);
joy.calcAge();

*/



// ------------------------------------



///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} accelerate:${this.speed}`);
};

Car.prototype.break = function() {
    this.speed -= 5;
    console.log(`${this.make} break:${this.speed}`);
};

const BMW = new Car('BMW',120);
const Mercedes = new Car('Mercedes',95);

BMW.accelerate();
BMW.break();
BMW.accelerate();
Mercedes.accelerate();
Mercedes.break();
Mercedes.break();


*/

// ------------------------------------

/*
// get set

const account = {
    owner: 'king',
    movement: [200,215,1412,163,2356],
    
    get latest(){
        return this.movement.slice(-1).pop();
    },

    set latest(mov){
        this.movement.push(mov);
    },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movement);
*/

// ------------------------------------

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*

class Car2 {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    };
    
    get speedUS(){
        return this.speed  / 1.6;
    };

    set speedUS(speed){
       this.speed = speed * 1.6;
    };
}
const ford = new Car2('ford',120);
console.log(ford.speedUS);
ford.speedUS = 240;
console.log(ford.speedUS);



// ------------------------------------

console.log('-----------------')

Person.prototype.calcAge = function(){
    console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function(firstName,birthYear,course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this,firstName,birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const make = new Student('make',2000,'Computer Science');
make.introduce();
make.calcAge();

console.log(make);
console.log(make.__proto__);
console.log(make.__proto__.__proto__);

console.log(make instanceof Student);
console.log(make instanceof Person);
console.log(make instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// ------------------------------------

console.log('-----------------')
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} accelerate:${this.speed}`);
};

Car.prototype.break = function() {
    this.speed -= 5;
    console.log(`${this.make} break:${this.speed}`);
};



const EV = function(make,speed,charge){
    Car.call(this,make,speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;


EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};

EV.prototype.accelerate = function(){
    this.speed += 20 ;
    this.charge --;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
};

const Tesla = new EV('Tesla',120,23);
Tesla.chargeBattery(90);
Tesla.accelerate();
Tesla.break();
console.dir(Tesla.constructor);

console.log(Object.getPrototypeOf(Tesla));
*/



// ------------------------------------

/*
class Person{ 
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    };  

    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    };

    test() {
        console.log('test');
    };

    get age(){
        return 2025 - this.birthYear;
    };

    set fullName(name) {
        console.log(name);
        if(name.includes(' '))  this._fullName = name;
        else alert(`${name} is not a full name.`);
    };

    get fullName() {
        return this._fullName;
    };

    static hey(){
        console.log('hey');
    };
    
};

class Student extends Person{
    constructor(fullName,birthYear,course){
        super(fullName,birthYear);
        this.course = course;
    };

    introduce = function(){
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    };

    calcAge(){
        console.log(`I'm ${2025 - this.birthYear} years old,but as a student I feel more like ${2025 - this.birthYear + 10}`);
    };
};
const coulc = new Student('coulc',2007,'Computer Science');

coulc.introduce();
coulc.calcAge();

*/

/*
const PersonProto = {
    calcAge() {
        console.log(2025 - this.birthYear);
    },

    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course;
};

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const jay = Object.create(StudentProto);
jay.init('Jay',2000,'Computer Science');
jay.introduce();
jay.calcAge();

console.log(jay.__proto__);


*/

/*
class Account{
    static bankName = 'N';
    // public fields
    locale = navigator.language;
    // private  fields
    #movement = [];
    #pin;
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movement = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account,${owner}`);
    };

    // public method
    deposit(val){
        this.#movement.push(val);
        return this;
    };

    withdraw(val){
        this.deposit(-val);
        return this;
    };

    // private method
    #approveLoan(val){
        return true;
    };

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log('Loan approved');
        }
        return this;
    };

    getPin(){
        return this.#pin;
    };

    static #getasdf(){
        console.log(123);
    }

    getasdfa(){
        Account.#getasdf();
    }
};

const act1 = new Account('Jay','EUR',1111);

// act1.movement.push(123123);
// act1.movement.push(-123);

act1.deposit(123123);
act1.withdraw(123);
act1.requestLoan(1000);

console.log(act1);
console.log(act1._pin)
console.log(act1.getPin());
console.log(Account.bankName);

act1.getasdfa();

act1.deposit(123).deposit(321).withdraw(32).requestLoan(20000).withdraw(100);
console.log(act1);


*/



///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    };

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at: ${this.speed} km/h.`);
        return this;
    };

    break(){
        this.speed -= 5;
        console.log(`${this.make} is going at: ${this.speed}`);
        return this;
    };
}

class EVCl extends CarCl{
    #charge;
    constructor(make,speed,charge){
        super(make,speed);
        this.#charge = charge;
    };

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    };
}

const Rivian = new EVCl('Rivian',120,23);
Rivian.chargeBattery(12).accelerate().break().accelerate().break();

