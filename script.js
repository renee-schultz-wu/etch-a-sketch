const canvas = document.querySelector(".canvas");


function promptEnter() {
    let nrows = prompt("How many grids per row for thy sketch m'lord? (default 16 x 16) ", 16);
    console.log(nrows);
    nrows = Number(nrows)
    if (nrows && nrows < 100){
        nrows = Math.floor(nrows);
        
    } else {
        alert("Not available! Imma default it to 16 x 16.");
        nrows = 16;
    }
    return nrows;
}

function createCanvas(nrows){
    const content = document.createElement("div");
    content.setAttribute("id", "canvas")
    for (let i = 0; i < nrows; i++ ){
        const row = document.createElement("div");
        row.style.cssText = "display:flex; flex-wrap: wrap";
    
        for (let j = 0; j < nrows; j++){
            const grid = document.createElement("div");
            grid.style.cssText = "   flex:1;  border: 0.5px solid pink; background-color: white; ";
            grid.style.width = 640/nrows-1 + "px";
            grid.style.height = 640/nrows-1 + "px";

            grid.classList.add("grid");
            row.appendChild(grid);
        }

        content.appendChild(row);
    }
    canvas.append(content);

    const allGrids = document.querySelectorAll(".grid");
    const grids = Array.from(allGrids);

    for (const g of grids){
        g.addEventListener("mouseover", function(e){
            //e.target.style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            e.target.style.background = "gray";
        });
    }
}



createCanvas(16);

const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    const current = document.getElementById("canvas");
    if (current) {
        canvas.removeChild(current);
    };
    
    const n = promptEnter();
    createCanvas(n);
})


