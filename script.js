const container = document.querySelector(".container");

const btn = document.querySelector(".chGrid");

let size = 16; //default grid size 16*16

let divs = []; //create divs variable

//create square grid of divs
function createGrid() {
    for(let i = 0; i < (size*size); i++) {
    divs[i] = document.createElement("div");
    container.appendChild(divs[i]);
}
}

//add grid style
function grid() {
    for(let i = 0; i < (size*size); i++) {
    divs[i].style.cssText = `width: calc(${100}%/${size}); background-color: #e1e6e5; border-color: black; border-style: solid; border-width: 1px; box-sizing: border-box;`;
}
}

//delete grid
function deleteGrid() {
    console.log(size);
    for(let i = 0; i < (size*size); i++) {
    container.removeChild(divs[i]);
    divs[i].remove();
}
}

//create and design grid

createGrid();
grid();

//change grid
btn.addEventListener("click", () => {
    deleteGrid();
    size = parseInt(prompt("Enter the grid size: "));
    createGrid();
    grid();
})




