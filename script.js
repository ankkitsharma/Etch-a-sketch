const container = document.querySelector(".container");

const btn = document.querySelector(".chGrid");



let div;
//create divs for grid
for(let i = 0; i < 256; i++) {
    div = document.createElement("div");
    div.style.cssText = `height: ${500/16}px; width: ${500/16}px; background-color: #e1e6e5; border-color: black; border-style: solid; border-width: 1px; box-sizing: border-box;`
    container.appendChild(div);
}

btn.addEventListener("onmouseover", () => {
    
})



