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













