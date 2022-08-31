let color = 'black';

let slider = document.querySelector('#slider');
let output = document.querySelector('#value');
output.textContent = `${slider.value}x${slider.value}`;
slider.oninput = () => output.textContent = `${slider.value}x${slider.value}`;


//CREATE GRID
function createGrid(size) {
    let grid = document.querySelector('#grid-container');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', setColor);
        square.classList.add('square');
        grid.appendChild(square);
    }
}
createGrid(16);

function changeSize() {
    let sizeInput = slider.value;
    createGrid(sizeInput);
}

function changeColor(colorInput) {
    color = colorInput;
}

function setColor() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}
