const monthlyRent = 500;
const MONTH_IN_YEAR = 12;
// const yearlyRent = monthlyRent * 12;
const yearlyRent = MONTH_IN_YEAR * monthlyRent;
console.log(yearlyRent);

const myName = `Sergei LifeStruggler`;
console.log(myName);

const firstName = `Sergei`;
const lastName = `LifeStruggler`;
const sentence = `Hello ` + firstName + ` ` + lastName + `! How are you?`;
console.log(sentence);

const newSentence = `Hello ${firstName} ${lastName}! How are you?`;
console.log(newSentence);

const num = 5.00001;
console.log(num + 1.2345);

const isSkyblue = false;

let greeting;

if (isSkyblue) {
  greeting = `It must be nice weather`;
} else {
  greeting = `It must be bad weather`;
}
console.log(greeting);

if (2 + 2 === 4) {
  console.log(`Great! Math still works!`);
} else {
  console.log(`Oh, no! Math is broken!`);
}

const friendsAtYourParty = 5;
if (friendsAtYourParty === 0) {
  console.log(`coool! I got all nachos to myself`);
} else if (friendsAtYourParty <= 4) {
  console.log(`Great! Let's play Mortal Combat!`);
} else if (friendsAtYourParty <= 6) {
  console.log(`oooh! Some coolf guys are here!`);
} else {
  console.log(`Awesome! Let us dance!`);
}

let dogInTheYard = 0;
while (dogInTheYard < 50) {
  console.log(dogInTheYard);
  dogInTheYard = dogInTheYard + 7;
}
console.log(dogInTheYard);

let stupidJokes = 0;
for (let i = 0; i <= 10; i++) {
  stupidJokes++;
}
console.log(stupidJokes);

const character = `f`;
const timesToRepeat = 5;
let myString = ``;
for (let i = 0; i < timesToRepeat; i++) {
  myString += character;
}
console.log(myString);

function addTwo(number) {
  return number + 2;
}

const answer = addTwo(5);
const answerNext = addTwo(10);
console.log(answer);
console.log(answerNext);

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 15));
