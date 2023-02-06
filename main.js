'use strict';

// Strings, numbers and booleans
//If we change the original one, it won't update the other one
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Ana';
let name2 = name;
console.log(name, name2);
name = 'Lucía';
console.log(name, name2);


//ARRAYS

//Original array
const players = ['Wes', 'Sarah', 'Ryan', 'Mike'];
//A reference to the original array, when we update one of them, it will update both
const team = players;
console.log(players, team);
team[3] = 'Lux';
players[0] = 'Ana';
console.log(players, team);

//To make a copy of the original array
//With slice
const team2 = players.slice();
team2[1] = 'Poppy';
console.log(team, team2);
//With concat
const team3 = [].concat(players);
//Spread operator
const team4 = [...players];
//Array.from()
const team5 = Array.from(players);

//OBJECTS
const person = {
    name: 'Wes Bos',
    age: 40
};

//Reference
const captain = person;
captain.number = 90;
console.log(person, captain);

//To make a copy of the original object
//Object.assign, we take a blank object, we overwrite or fold in all the properties from our object, and we use the third argument to add new ones
const cap2 = Object.assign({}, person, {number : 99, age: 12});
console.log(cap2);
//Spread operator
const cap3 = {...person};

//Careful!
const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

//Object.assign only clones one level deep, if we need to clone the whole object, we need another type of function to clone deep
const dev = Object.assign({}, wes);

dev.social.twitter = '@coolman';
//Changes both
console.log(dev.social);
console.log(wes.social);

//Idem with spread operator
const dev2 = {...wes};

dev2.social.twitter = '@other';
console.log(dev2.social);
console.log(wes.social);

//Trick to obtain a clone, turn into a string, and then immediately turn it back into an object. Not recommended

const dev3 = JSON.parse(JSON.stringify(wes));

dev3.social.twitter = '@new';
console.log(dev3.social);
console.log(wes.social);