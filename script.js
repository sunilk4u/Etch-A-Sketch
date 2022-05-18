function createGrid() {
  const container = document.querySelector(".container");

  for (let i = 0; i < 16; i++) {
    const gridLine = document.createElement("div");
    gridLine.classList.add("gridLine");

    for (let j = 0; j < 16; j++) {
      const singleGrid = document.createElement("div");
      singleGrid.classList.add("singleGrid");
      gridLine.appendChild(singleGrid);
    }
    container.appendChild(gridLine);
  }
}

createGrid();
