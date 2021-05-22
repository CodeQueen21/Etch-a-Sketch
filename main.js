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

function rdmColor(element) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  element.style.backgroundColor = "#" + randomColor; 
  return true;
}

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













