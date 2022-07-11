const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
trigger = false;

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

container.addEventListener('mouseover', function(e){
    if (e.target.matches('.cell') && trigger){
        e.target.classList.add('colored');
    }
})

function resetGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) =>{
        cell.classList.remove('colored');
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

createGrid(30);