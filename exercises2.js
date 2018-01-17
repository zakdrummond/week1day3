// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

'use strict';

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (this.water / this.flour) * 100;
//   }
// };

// console.log(loaf.hydration());

// // Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// // Loop over the object using for ... in
// // Use console.log to show each property name and its associated value.

// const myObj = {
//   foo: 1,
//   bar: 2,
//   fum: 3,
//   quux: 4,
//   spam: 5
// };

// function loop(obj) {
//   for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }

// loop(myObj);

// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

// const hobbitMeals = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(hobbitMeals.meals[3]);


// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.



// const myArray = [
//   {
//     name: 'Chris',
//     jobTitle: 'Unemployed'
//   },
//   {
//     name: 'Zak',
//     jobTitle: 'Bartender',
//     boss: 'Chris'
//   },
//   {
//     name: 'Cody',
//     jobTitle: 'Teacher',
//     boss: 'Chris'
//   }
// ];

// function loop(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let person = arr[i];
//     if (person.boss) {
//       console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
//     }
//     else {
//       console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
//     }
//   }
// }

// loop(myArray);

// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.


// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher.
// Additionally, instead of having the function accept a single word, have the function accept a single string of words, and then return the fully decoded message.

// let code = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };

// let myString = 'craft block argon meter bells brown croon droop';

// function myFunc(str, code) {
//   let decoded = '';
//   let words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let letter = word[0];
//     let number = code[letter];
//     if (number) {
//       decoded += word[number];
//     } else {
//       decoded += ' ';
//     }
    
//   }
//   console.log(decoded);
//   return decoded;
// }

// myFunc(myString, code);

// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
// Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

// Each character should also have a method called evaluateFight 
// that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" 
// where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

// Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. 
// Your characters array should now have 5 objects in it.

// Add a new character to characters (make up any attributes not provided):

// Arwen Undomiel is a Half-Elf of Rivendell
// Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

// What if you wanted to equip a weapon for each character and change how they are described? For example:

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?

const characters = [];

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  const character = {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${origin} who use a ${weapon}.`);
    },
    evaluateFight: function(character) {
      console.log(`Your opponent takes ${x} games and you receive ${y} damage`);
    },
    weapon
  };
  return character;
}

characters.push(createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'));
characters.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'));
characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'));
characters.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'));
characters.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'));

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 5, 4, 'Hadhafang'));

characters.find(function(obj) {
  if (obj.nickname === 'aragorn') {
    obj.describe();
  } 
}
);

console.log(characters.filter(function(obj) {
  if (obj.race === 'Hobbit') {
    return obj;
  }
}));

console.log(characters.filter(function(obj) {
  if (obj.attack > 5) {
    return obj;
  }
}));

characters[0].describe();