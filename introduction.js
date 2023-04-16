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

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I'm extremly glad you could join us, ${firstName}! I hope enjoy your stay here, ${honorific} ${lastName}`;
}
console.log(greet(`Sergey`, `Trifonov`, `The Great`, `Greetings`));

const myHomeCity = `Ruzaevka`;
const myRegion = `Mordovia republic`;
const myCountry = `Russian Federation`;

function logOutYourHome(city, region, country) {
  console.log(`You are from${city}, ${region}, ${country}`);
}
logOutYourHome(myHomeCity, myRegion, myCountry);

let something = `outside the function`;

function thing() {
  let something = `out of the scope`;
  if (true) {
    let something = `inside the scope`;
    console.log(something);
  }
  console.log(something);
}

thing();

console.log(something);

const wierdsentence = `ToO MucH FooLS ANd IdIOTs evErYWheRE`;
console.log(wierdsentence.toLowerCase());

console.log(Math.round(5.1));
console.log(Math.floor(5.7));
console.log(Math.ceil(5.1));

const someName = `FreedomTOEveryOne`;
console.log(someName.substring(0, 3));
function firstThreeLetters(word) {
  let correctFirstThree = word.substring(0, 3);
}

const person = {
  name: `Sergei Trifonov`,
  city: `Ruzaevka`,
  region: `Mordovia`,
  favouriteFood: `Spagetti`,
  wantsShrimpsRightNow: true,
  numberOfShrimps: 100,
};
console.log(person);
console.log(person.name);
console.log(person[`name`]);

const person1 = {
  name: `Brian Holt`,
  ageRange: `25-35`,
};

const person2 = {
  name: `Britney Mars`,
  ageRange: `45-65`,
};

function suggestMusic(anyPerson) {
  if (anyPerson.ageRange === `25-35`) {
    console.log(`You will probably like a music band "Hurts"`);
  } else if (anyPerson.ageRange === `45-65`) {
    console.log(`Don't you wanna listen to some relaxing violin music?`);
  } else {
    console.log(`Let's play some rock and roll!`);
  }
}
suggestMusic(person1);
suggestMusic(person2);

const dog = {
  name: `MuhtarIshin`,
  speak() {
    console.log(`woof-woof`);
  },
};
dog.speak();

const me = {
  name: {
    firstName: `Sergei`,
    secondName: `Trifonov`,
    logMeOut() {
      console.log(this);
    },
  },
  location: {
    streetNumber: 570,
    street: `Mayakovskiy`,
    city: `Ruzaevka`,
    region: `Mordovia`,
    country: `Russian Federation`,
  },
  getAddress() {
    return `${this.name.firstName} ${this.name.secondName}, ${this.location.streetNumber} ${this.location.street}, ${this.location.city}, ${this.location.region}, ${this.location.country} `;
  },
};

console.log(me);
console.log(me.name.secondName);

console.log(me.getAddress());

console.log(me.name.logMeOut());
me.name.firstName = `Vladimir`;
console.log(me.name.logMeOut());
// function getAddress() {
//   return `${this.name.firstName} ${this.name.secondName}, ${this.location.streetNumber} ${this.location.street}, ${this.location.city}, ${this.location.region}, ${this.location.country} `;
// }

// // Return function with binded context (this)
// console.log(getAddress.bind(me)());

// // call function with pointed context
// console.log(getAddress.call(me, ));

// // the same as .call, but with array for second argument
// console.log(getAddress.apply(me, ));

const dayOfTheWeek = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];
console.log(dayOfTheWeek);
console.log(dayOfTheWeek[0]);
console.log(dayOfTheWeek[6]);

const primeNumbers = [1, 2, 3, 5, 7, 9, 13, 15, 19];
console.log(primeNumbers.length);
console.log(primeNumbers.join(`no`));

const courses = [
  { teacher: `Kyle Simpson`, course: `JS Function Lite` },
  { teacher: `Sarah Drasner`, course: `Intro to Vue` },
  { teacher: `Brian Holt`, course: `Complete Intro to React v3` },
  { teacher: `Steve Keney`, course: `State Management` },
];

console.log(courses);
courses.push({ teacher: `Sean Larkin`, course: `Webpack` });

console.log(courses);
const theLastCourse = courses.pop();
console.log(theLastCourse);
courses[4] = { teacher: `Sergey Trifonov`, course: `Boxing` };
// Next biltin allows to take out some lines by the number of their index. And also to insert/replace something instead
const takeAwayCourse = courses.splice(3, 2, {
  teacher: `Examole`,
  course: `Example`,
});
console.log(takeAwayCourse);
console.log(courses);

for (let i = 0; i < dayOfTheWeek.length; i++) {
  console.log(dayOfTheWeek[i].toUpperCase());
}

dayOfTheWeek.forEach(function (day) {
  console.log(day);
});
// so here I guess a function forEach includes another function that takes an array line as a paramater

const newDaysOfAWeek = dayOfTheWeek.map(function (day) {
  return day.toUpperCase();
});
console.log(newDaysOfAWeek);

const numbersToSort = [1, 33, 5, 67, 7, 78, 9];
console.log(
  numbersToSort.sort(function (num1, num2) {
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
    return 0;
  })
);

const strings = [`a`, `c`, `b`, `d`];
console.log(
  strings
    .map(function (string) {
      return string.toUpperCase();
    })
    .sort()
);
console.log(strings.map((string) => string.toUpperCase()));

const x = `the point is nothing`;

console.log(x.split(``));
console.log(x.split(``).map((l) => l.toUpperCase()));
console.log(
  x
    .split(``)
    .map((s) => s.toUpperCase())
    .join(``)
);
console.log(
  x
    .split(``)
    .filter((s) => s !== `o`)
    .join(``)
);

const a = 24;
const b = 75;
const y = 10;
const isTrue = true;
if (a !== b) {
  console.log(`They are not equal`);
}
if (a === b && b === y) {
  console.log(`All of them are equal`);
}
if (isTrue || a === b) {
  console.log(`This is or statement`);
}
