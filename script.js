let container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", "gridDiv");
        //gridDiv.style.cssText = "border: 2px solid red; width: 75px; height: 75px";
        container.appendChild(gridDiv);
    }
}