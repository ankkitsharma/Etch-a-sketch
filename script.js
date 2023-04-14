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
    divs[i].style.cssText = `width: calc(${100}%/${size});`;
    divs[i].classList.toggle("gStyle");
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
    sketch();
});

//change color of grid square on hover
function sketch() {
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            console.log("bruh");
            div.classList.add("gSketch");
        });
    });
}

sketch();





