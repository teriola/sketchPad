//CREATE GRID
let grid = document.querySelector('#grid-container');
function createGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}
createGrid();

//BUTTONS
let buttons = document.querySelectorAll('button[data-color]');
buttons.forEach(button => {
    button.addEventListener('click', selectColor);
});

//COLOR SQUARES
let squares = document.querySelectorAll('.square');
let squareColor = 'black';
squares.forEach(square => {
    square.addEventListener('mouseover', (event) => {
        if (squareColor == 'black') {
            event.target.style.backgroundColor = squareColor;
        } else {
            squareColor = randomColor();
            event.target.style.backgroundColor = squareColor;
        }
    });
});

//RANDOM COLOR FUNCTION
function randomColor() {
    let colors = ['red', 'purple', 'pink', 'orange', 'brown', 'green'];
    return colors[Math.floor(Math.random() * colors.length)].toLowerCase();
}

//SELECT COLOR FUNCTION
function selectColor() {
    let color = this.dataset.color;
    if (color == 'random') {
        squareColor = randomColor();
    } else {
        squareColor = color;
    }
}

//CLEAR BUTTON
let resetButton = document.querySelector('#clear');
resetButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

//SLIDER VALUE
let slider = document.querySelector('#slider');
let output = document.querySelector('#value');
output.textContent = slider.value;
slider.oninput = () => output.textContent = slider.value;

//CHANGE GRID SIZE
// let updateButton = document.querySelector('#update');
// updateButton.addEventListener('click', updateGrid);
// function updateGrid() {
//     let value = slider.value;
//     grid.innerHTML = '';
//     grid.style.setProperty(
//         'grid-template-columns',
//         `repeat(${value},2fr)`
//     );
//     grid.style.setProperty(
//         'grid-template-rows',
//         `repeat(${value},2fr)`
//     );
//     for (let i = 0; i < value * value; i++) {
//         let div = document.createElement('div');
//         div.classList.add('square');
//         grid.appendChild(div);
//     }
// }