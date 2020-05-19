// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: 'Alyssa', middle: 'P.', last: 'Hacker' }, age: 26 },
  { name: { first: 'Ben', last: 'Bitdiddle' }, age: 34 },
  { name: { first: 'Eva', middle: 'Lu', last: 'Ator' }, age: 40 },
  { name: { first: 'Lem', middle: 'E.', last: 'Tweakit' }, age: 45 },
  { name: { first: 'Louis', last: 'Reasoner' }, age: 21 },
  { name: { first: 'Shahan', middle: 'Haig', last: 'Krakirian' }, age: 21 },
  { name: { first: 'Mae', middle: 'Julia', last: 'Berris'}, age: 26 }
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
  let total = 0;
  peopleArr.forEach((item) => {
    total += item.age
  });
  let average = Math.floor(total/peopleArr.length)
  return average
}

console.log(`Average age is ${avgAge(people)}.`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  let fullNameArray = [];
  
  peopleArr.forEach((item) => {
    let {first, middle, last} = item.name;
    let fullName;
    if (middle === undefined){
      fullName = `${first} ` + `${last}`;
      fullNameArray.push(fullName) ;
    }else{
      fullName = `${first} ` + `${middle} `+ `${last}`;
      fullNameArray.push(fullName);
    }
  })
  return fullNameArray
}

console.log('the result is', fullName(people));

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, setAge) {
  let oldPeopleArray = []

  peopleArr.forEach((item) => {
    let age = item.age;
    let {first, middle, last} = item.name;
    let nameAndAge
    if(age > setAge){
      if(middle === undefined){
        nameAndAge = `${first} ` + `${last} ` + 'is ' + age;
        oldPeopleArray.push(nameAndAge)
      } else {
        nameAndAge = `${first} ` + `${middle} ` + `${last} ` + 'is ' + age;
        oldPeopleArray.push(nameAndAge);
      };
    }
  })
  return oldPeopleArray
}

console.log(olderPeople(people, 26));
console.log(olderPeople(people, 40));
