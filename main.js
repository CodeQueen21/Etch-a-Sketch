const container = document.querySelector('#gridContainer');
const div = document.createElement('div');
div.style.width = '29px';
div.style.height = '29px';
div.style.border = 'thin solid black';
div.style.display = 'inline-block';

function rdmColor(element) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  element.style.backgroundColor = "#" + randomColor;
}

function row() {
  for(let i = 0; i < 16; i++) {
      let clone = div.cloneNode(true);
      clone.classList.add('cell');
     
     container.appendChild(clone);
  }
}

function column() {
  for (let i = 0; i < 32; i++) {
      row();
      i++;
  }
}

column();













