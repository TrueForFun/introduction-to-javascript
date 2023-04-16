const redSquare = document.querySelector(".red-square");

console.log({ redSquare });
redSquare.style.backgroundColor = `Blue`;
redSquare.style.border = `5px solid peru`;

const elementsToChanged = document.querySelectorAll(`.js-target`);
for (let i = 0; i < elementsToChanged.length; i++) {
  const currentElement = elementsToChanged[i];
  currentElement.innerText = `Modified by JS`;
}
const button = document.querySelector(`.new-button`);
button.addEventListener(`click`, function () {
  alert(`Hey, You! I'm overhere!`);
});

// const input = document.querySelector(`.input`);
const paragraph = document.querySelector(`.text`);

document.querySelector(`.input`).addEventListener(`keyup`, function (event) {
  paragraph.innerText = event.target.value;
});

const colorChoice = document.querySelector(`.color-box`);
document.querySelector(`.color`).addEventListener(`change`, function (event) {
  colorChoice.style.backgroundColor = event.target.value;
});

document
  .querySelector(`.button-container`)
  .addEventListener(`click`, function (event) {
    if (event.target.tagName === `BUTTON`) {
      alert(`You are alredy here! With us! ${event.target.innerText}`);
    }
  });
