
/* 
---
     1. Best way to define an object is to use the below, know as 'Object Literal' syntax
---
*/

const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
  }
};

/* 
---
    2. There are also two ways to get information out of an object
    Backet notation is useful if the property have a space within the string, i.e. "obnoxious property"
    Dot notation is prefered and easier to read
---
*/

// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]

// Example
const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object
myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'

/* 
---
    3. Objects as a design pattern => One of the simplest ways you can begin to organise your code is by grouping things into
    objects
---
*/

// example one - flatter structure
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two - grouped structure
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};

//Benefit of the grouped structure is that you need less variables to hold information
console.log(player.name);
console.log(player.marker);

// You can even parse the variable based on logic, where winningPlayer is either playerOne or playerTwo depending on outcome, parsed as the
// winningPlayer variable into the function
function gameOver(winningPlayer){
  console.log("Congratulations!");
  console.log(winningPlayer.name + " is the winner!");
}

/*
    ---
    4. Object constructors => When you need to make duplicated of specific objects, you can use an object constructor, which is just a regular
    function that be convention is named with an uppercase initial letter
    ---
*/

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// It gets used by calling the function with the keyword 'new'
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'

// Just like with the objects created using the 'Object Literal' method, you can add functions to the object
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

/* 
Safeguarding consideration - these functions could be called without using 'new' by mistake, and would lead to hard-to-track errors.
                             To prevent this, you can use the new.target meta property, as shown below
*/

function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
};

/*
  ---
  5. The protype => The prototype is another object that the original object inherist from, which is to say, the original
                    object has access to all of its prototype's methods and properties

                    a) All object in Javascript have a prototype
                    b) The prototype is another object
                    c) The original object inhereity from, and has access to all of its prototype's methods and properties

                    In the example of the Player object, the inherited properties are:

                    .name
                    .marker

                    and the inherited method is:

                    .sayName
  ---
*/

//How to check that the object has prototypes
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// How to see what the prototype objects are
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

// To check that a particular property exists
// The Player object doesn't have 'valueOf' as a property within the function
player1.hasOwnProperty('valueOf'); // false

// The prototype object does have the property 'valueOf' natively speaking
// We know that there is a prototype available on the Object Player (and all its variants) as shown on line 138
// i.e. Object.getPrototypeOf(Player.prototype) === Object.prototype;
Object.prototype.hasOwnProperty('valueOf'); // true

/*
  ---
  6. Injecting a function into an existing object
  ---
*/

// In order to inject a property into a string, we can use `` to enclose the string
// We can then use $[name-of-property] to drop into the string
Player.prototype.sayNameNew = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

// When calling the method, remember to add the () at the end
console.log(player1.sayNameNew());


// You can also inherit one prototype from another
function NewPerson(name) {
  this.name = name;
}

NewPerson.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function NewPlayer(name, marker) {
  this.name = name;
  this.marker = marker;
}

NewPlayer.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(NewPlayer.prototype); // returns Object.prototype

// Now make `NewPlayer` objects inherit from `NewPerson`
Object.setPrototypeOf(NewPlayer.prototype, NewPerson.prototype);
Object.getPrototypeOf(NewPlayer.prototype); // returns Person.prototype







