let container = document.querySelector("#container");
createGrid();

function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let gridDiv = document.createElement("div");
            gridDiv.setAttribute("class", "gridDiv");
            //gridDiv.style.cssText = "border: 2px solid red; width: 75px; height: 75px";
            container.appendChild(gridDiv);
        }
    }
    let gridDivs = document.querySelectorAll(".gridDiv");
    gridDivs.forEach(element => {
        element.addEventListener("mouseover", function () {
            this.style.backgroundColor = "green";
        })
    });
}

// function getDivs() {
//     return document.querySelectorAll(".gridDiv");
// }


let btn = document.querySelector("#btn");

btn.addEventListener("click", event => {
    let gridDivs = document.querySelectorAll(".gridDiv");
    gridDivs.forEach(element => {
        element.remove();
    });

    let gridNum = Number(prompt("How many grids do you want?"));
    if (isNaN(gridNum) || gridNum === 0) {
        gridNum = 16;
    } else if (gridNum > 100) {
        gridNum = 100;
    }
    createGrid(gridNum);
})