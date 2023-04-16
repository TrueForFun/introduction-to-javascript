function addTwoToEveryNumberInTheList(list) {
  // an example for you to see how the tests work
  let newList = [];

  for (let i = 0; i < list.length; i++) {
    newList.push(list[i] + 2);
  }

  return newList;
}

function findLargestNumber(list) {
  let largest = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] > largest) {
      largest = list[i];
    }
  }

  return largest;
}

function makeDogObject() {
  // return a dog object that
  //   has a speak method that returns woof
  //   has a name property of "Fido"
  //   has a color property of "white"
  //   has an age property of 6

  return {
    speak() {
      return `woof`;
    },
    name: `Fido`,
    color: `white`,
    age: 6,
  };
}

function getListOfNames(list) {
  // list is an array of objects that looks like this
  // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
  // return a list of all the workers' names

  const listOfNames = [];

  // list.forEach(item => listOfNames.push(item.name))
  // for (const item of list) {
  //   listOfNames.push(item.name)
  // }

  // return list.map(item => item.name)
  // return list.map(({ name }) => name);

  for (let i = 0; i < list.length; i++) {
    listOfNames.push(list[i].name);
  }

  return listOfNames;
}

function getAverageAge(list) {
  // using the same list as above, get the average age of all the workers'
  let workerAge = [];
  for (let i = 0; i < list.length; i++) {
    workerAge.push(list[i].age);
  }
  let averAge = workerAge.reduce((acc, current) => acc + current) / list.length;
  return averAge;
}

function getAllEngineers(list) {
  // using the same list {} above, return a list of all people who have the word "Engineer" in their jobTitle
  // const engineersList = [];

  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].jobTitle.includes("Engineer")) {
  //     engineersList.push(list[i].name);
  //   }
  // }

  // return engineersList;

  // return list.reduce((acc, current) => {
  //   if (current.jobTitle.includes('Engineer')) acc.push(current.name)

  //   return acc
  // }, [])

  return list
    .filter((item) => item.jobTitle.includes("Engineer"))
    .map((item) => item.name);
}

function sort(list) {
  // sort a list of numbers into ascending order
  // if you need more help, Google how to do bubble sort
  // you can sort, if you want to write it by hand, use bubble sort or insertion sort

  // return list.sort((num1, num2) => num1 - num2);

  const sortedList = list.slice();

  for (let i = 0; i < sortedList.length; i++) {
    for (let j = 0; j < sortedList.length - i; j++) {
      if (sortedList[j] > sortedList[j + 1]) {
        let temp = sortedList[j + 1];
        sortedList[j + 1] = sortedList[j];
        sortedList[j] = temp;
      }
    }
  }

  return sortedList;
}

const sortResult = sort([8, 3, 5, 2, 1]);
console.log(sortResult);
