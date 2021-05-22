const container = document.querySelector('#gridContainer');
const div = document.createElement('div');
div.style.border = 'thin solid black';
div.style.display = 'inline-block';
let gridSizeBtn = document.getElementById('gridSize');
let colorInputLabel = document.getElementById('label');
let colorInput = document.getElementById('color');
let color;
let rainbowBtn = document.getElementById('rainbow')
let eraseBtn = document.getElementById('erase');
let clearBtn = document.getElementById('clear')
let userAnswer;

//styling for when change grid size btn is clicked
gridSizeBtn.addEventListener('click', () => {
  gridSizeBtn.style.border = 'thin solid white';
  gridSizeBtn.style.borderRadius = '5px';
  colorInputLabel.style.border = 'none';
  colorInputLabel.style.borderRadius = 'none';
  rainbowBtn.style.border = 'none';
  rainbowBtn.style.borderRadius = 'none';
  eraseBtn.style.border = 'none';
  eraseBtn.style.borderRadius = 'none';
  clearBtn.style.border = 'none';
  clearBtn.style.borderRadius = 'none';
}) 

//styling for when the change color btn is clicked
colorInput.addEventListener('input', () => {
  color = colorInput.value;
  colorInputLabel.style.border = 'thin solid white';
  colorInputLabel.style.borderRadius = '5px';
  rainbowBtn.style.border = 'none';
  rainbowBtn.style.borderRadius = 'none';
  gridSizeBtn.style.border = 'none';
  gridSizeBtn.style.borderRadius = 'none';
  eraseBtn.style.border = 'none';
  eraseBtn.style.borderRadius = 'none';
  clearBtn.style.border = 'none';
  clearBtn.style.borderRadius = 'none';
});

//styling for when the rainbow btn is clicked
rainbowBtn.addEventListener('click', () => {
  rainbowBtn.style.border = 'thin solid white';
  rainbowBtn.style.borderRadius = '5px';
  colorInputLabel.style.border = 'none';
  colorInputLabel.style.borderRadius = 'none';
  gridSizeBtn.style.border = 'none';
  gridSizeBtn.style.borderRadius = 'none';
  eraseBtn.style.border = 'none';
  eraseBtn.style.borderRadius = 'none';
  clearBtn.style.border = 'none';
  clearBtn.style.borderRadius = 'none';
});

//styling for when the erase btn is clicked
eraseBtn.addEventListener('click', () => {
  eraseBtn.style.border = 'thin solid white';
  eraseBtn.style.borderRadius = '5px';
  rainbowBtn.style.border = 'none';
  rainbowBtn.style.borderRadius = 'none';
  colorInputLabel.style.border = 'none';
  colorInputLabel.style.borderRadius = 'none';
  gridSizeBtn.style.border = 'none';
  gridSizeBtn.style.borderRadius = 'none';
  clearBtn.style.border = 'none';
  clearBtn.style.borderRadius = 'none';
})

//styling for when the clear btn is clicked
clearBtn.addEventListener('click', () => {
  clearBtn.style.border = 'thin solid white';
  clearBtn.style.borderRadius = '5px';
  eraseBtn.style.border = 'none';
  eraseBtn.style.borderRadius = 'none';
  rainbowBtn.style.border = 'none';
  rainbowBtn.style.borderRadius = 'none';
  colorInputLabel.style.border = 'none';
  colorInputLabel.style.borderRadius = 'none';
  gridSizeBtn.style.border = 'none';
  gridSizeBtn.style.borderRadius = 'none';
})

//determines which btn was clicked
function isClicked(element) {
  if(element.style.border === 'thin solid white') {
    return true
  } else {
    return false;
  }
}

//creates random colors
function rdmColor(element) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  element.style.backgroundColor = "#" + randomColor; 
  return true;
}

//adds functionality for when each btn is clicked
function btnClicked(element) {
  if(isClicked(rainbowBtn) === true) {
    element.style.backgroundColor = rdmColor(element);
  } else if(isClicked(colorInput) === true) {
    element.style.backgroundColor = color;
  } else if(isClicked(eraseBtn) === true) {
    element.style.backgroundColor = 'white';
  } 
}

//promps user to enter what size grid they would like then saves it
function gridSizeChoice() {
  let choice = prompt('Please choose small, medium, or large');
  let answer = choice.toLowerCase();
  if(answer === 'large' || answer === 'medium' || answer === 'small') {
    return userAnswer = answer;
  } else {
    alert('You must enter small, medium or large');
  }
}

//depending on the users answer, it chooses which grid size to activate
function gridChange(answer) {
  if(answer === 'large') {
      largeGridTotalCells();
  } else if(answer === 'small') {
      smallGridTotalCells()
  } else if(answer === 'medium') {
      mediumGridTotalCells();
  }
}

// medium sized grid
function mediumGridCellGenerator() {
  for(let i = 0; i < 16; i++) {
    div.style.width = '29px';
    div.style.height = '29px';
    let clone = div.cloneNode(true);
      clone.classList.add('cell');
      clone.addEventListener('mouseenter', () => {
       btnClicked(clone);
    })
    clearBtn.addEventListener('click', () => {
      clone.style.backgroundColor = null;
    })
    gridSizeBtn.addEventListener('click', () => {
        if(userAnswer === 'large' || userAnswer === 'small') {
          container.removeChild(clone);  
        }
      
    }) 
   container.appendChild(clone);
  
  }
}

function mediumGridTotalCells() {
  for (let i = 0; i < 32; i++) {
      mediumGridCellGenerator();
      i++;
  }
}
mediumGridTotalCells();

//largeGrid cellSize
function largeGridCellGenerator() {
  for(let i = 0; i < 8; i++) {
    div.style.width = '60px';
    div.style.height = '60px';
    let clone = div.cloneNode(true);
      clone.classList.add('cell');
      clone.addEventListener('mouseenter', () => {
       btnClicked(clone);
    })
    clearBtn.addEventListener('click', () => {
      clone.style.backgroundColor = null;
    })
    gridSizeBtn.addEventListener('click', () => {
      if(userAnswer === 'medium' || userAnswer === 'small') {
        container.removeChild(clone);
      }
   }) 
    container.appendChild(clone);
  }
}

function largeGridTotalCells() {
  for (let i = 0; i < 15; i++) {
      largeGridCellGenerator();
      i++;
  }
}

//smallGrid 
function smallGridCellGenerator() {
  for(let i = 0; i < 32; i++) {
      div.style.width = '13.5px';
      div.style.height = '13.5px';
      let clone = div.cloneNode(true);
      clone.classList.add('cell');
      clone.addEventListener('mouseenter', () => {
       btnClicked(clone);
    })
    clearBtn.addEventListener('click', () => {
      clone.style.backgroundColor = null;
    })
    gridSizeBtn.addEventListener('click', () => {
      if(userAnswer === 'large' || userAnswer === 'medium') {
        container.removeChild(clone);  
      }
    }) 
    container.appendChild(clone);
  }
}

function smallGridTotalCells() {
  for (let i = 0; i < 62; i++) {
    smallGridCellGenerator()
      i++;
  }
}

//promps user to choose which grid size they want when the change grid size btn is clicked
gridSizeBtn.addEventListener('click', () => {
  gridSizeChoice();
  gridChange(userAnswer);
}) 













