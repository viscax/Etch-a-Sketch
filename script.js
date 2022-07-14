const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
trigger = false;

/* Creating a 500x500 grid of divs which represent the canvas */

function createGrid(size){
    for (let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.style.height = `${500/size}px`;
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${500/size}px`;
            cell.style.height = `${500/size}px`;
            row.appendChild(cell);
        }
    }
}

/* Color Buttons*/

let drawColor = 'black';
const classicButton = document.querySelector(".black");
classicButton.addEventListener('click', () => {
    drawColor = 'black';
});
const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener('click', () => {
    drawColor = 'rainbow';
});
const eraseButton = document.querySelector(".erase");
eraseButton.addEventListener('click', () => {
    drawColor = 'white';
})

/* Canvas Functionality */

container.addEventListener('mouseover', function(e){
    if (e.target.matches('.cell') && trigger && drawColor == 'black'){
        e.target.style.backgroundColor = 'black';
    }
    else if (e.target.matches('.cell') && trigger && drawColor == 'rainbow'){
        e.target.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    }
    else if (e.target.matches('.cell') && trigger && drawColor == 'white'){
        e.target.style.backgroundColor = 'white';
    }
})

function resetGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) =>{
        cell.style.backgroundColor = 'white';
    });
}

reset.addEventListener('click', function(e){
    resetGrid()
})

document.addEventListener('mousedown', function(){
    trigger = true;
});

document.addEventListener('mouseup', function(){
    trigger = false;
});

/* Grid formation based on slider value */

var slider = document.getElementById("myRange");
var output = document.getElementById("value");
createGrid(slider.value);
slider.oninput = function(){
    deleteGrid();
    createGrid(this.value);
}

function deleteGrid(){
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        container.removeChild(row);
    })
}