function createGrid(size) {
  const container = document.querySelector(".container");

  for (let i = 0; i < size; i++) {
    const gridLine = document.createElement("div");
    gridLine.classList.add("gridLine");

    for (let j = 0; j < size; j++) {
      const singleGrid = document.createElement("div");
      singleGrid.classList.add("singleGrid");
      gridLine.appendChild(singleGrid);
    }
    container.appendChild(gridLine);
  }
}

createGrid(16);

function askInput() {
  let newSize = Number(
    prompt("Enter new size for canvas (must be smaller or equal to 100)")
  );
  if (Number.isInteger(newSize) && newSize <= 100) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    createGrid(newSize);
  } else {
    alert("Wrong Input! Enter Number Value Again");
  }
}

const setNew = document.querySelector(".custom");
setNew.addEventListener("click", askInput);
