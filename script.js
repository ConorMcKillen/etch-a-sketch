const gridContainer = document.querySelector('.grid-container');
const adjustButton = document.querySelector('.adjust-button');
const toggle = document.querySelector('.switch');
const eraserOnOff = document.querySelector('.eraser-on-off');
let gridNumber = document.querySelector('.grid-number');

function createGrid(number) {
  for (let i = 0; i < number; i++) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-container');
    for (let j = 0; j < number; j++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('square');
      innerContainer.appendChild(newDiv);
    }
    gridContainer.appendChild(innerContainer);
  }
  changeColour();
}

function updateGridNumber(number) {
  gridNumber.textContent = `${number} x ${number}`;
}

createGrid(16);

const innerContainer = document.querySelector('.inner-container');

function removeGrid() {
  while (innerContainer.firstChild) {
    innerContainer.removeChild(innerContainer.lastChild);
  }

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

adjustButton.addEventListener('click', () => {
  const number = prompt('Enter a number of squares: ');
  if (number > 100 || number < 0) {
    alert('You cannot enter a number greater than 100 or less than 0');
  } else if (isNaN(number) || number === null || number === '') {
    number = 16;
  } else {
    eraserOnOff.checked = false;
    removeGrid();
    createGrid(number);
    updateGridNumber(number);
  }
});

function changeColour() {
  document.querySelectorAll('.square').forEach((item) => {
    item.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'black';
    });
  });
}

eraserOnOff.addEventListener('click', (e) => {
  if (e.target.checked === true) {
    document.querySelectorAll('.square').forEach((item) => {
      item.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'white';
      });
    });
  } else {
    document.querySelectorAll('.square').forEach((item) => {
      item.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
      });
    });
  }
});
