// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

// A) console.log() your object.
// B) console.log() a few of the values in the object.
let maeObject = {
  name : {
    first : "Mae",
    last: "Berris",
  },
  age: 26,
  city: 'Montreal',
  siblings: '2',
  petName: 'Mamoru',
  monthOfBirth: 'June',
}

console.log(maeObject)
console.log(maeObject.age)
console.log(maeObject.name)
console.log(maeObject.city)
//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

maeObject.favoriteFood = 'taco';
maeObject.favoriteMovie = 'star wars'
maeObject.favortieShow = 'She-Ra'

console.log(maeObject)

// let maeObject2 = {
//   name : {
//     first : "Mae",
//     last: "Berris",
//   },
//   age: 26,
//   city: 'Montreal',
//   siblings: '2',
//   numberOfPets: '2',
//   petNames: 'Mamoru and Tsukino',
//   monthOfBirth: 'June',
//   favoriteFood: 'Tacos',
//   FavoriteMovies: 'Star Wars', 
// }
//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  title: 'Star Wars : The Last Jedi',
  director: 'Ryan Johnson',
  yearReleased: '2017',
  rating: '7/10',
  Actors : ['Daisy Ridley', 'Adam Driver', 'John Boyega', 'Mark Hamil'],
};

//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = 'name';
const person = {
  name: 'Alyssa P. Hacker',
  age: 26,
  hometown: 'somewhere',
};

console.log('the age is', person.age); // => 26
console.log(person['name']); // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: 'Alyssa',
    middle: 'P.',
    last: 'Hacker',
  },
  age: 26,
};

function fullName(person) {
  let {first, middle, last} = person.name
  let fullName = `${first} ` + `${middle} ` + `${last} `
  return fullName
}

console.log('test 1', fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: 'Rick',
    last: 'Sanchez',
  },
  age: 66,
};

function betterFullName(person) {
  let {first, middle, last} = person.name
  let fullName = ''
  if( middle === undefined){
    fullName = `${first} ` + `${last} `
  }else {
  fullName = `${first} ` + `${middle} ` + `${last} `}
  return fullName
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
console.log(betterFullName(alyssa))
