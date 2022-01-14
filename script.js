const grids = document.querySelector(".grids");
const gridRow = document.querySelector(".grid-row");
const gridColumn = document.getElementsByClassName("grid-column");
let color;
let boxes;
let click = false;

function addRow() {
  if (grids.children.length === 0) {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    grids.appendChild(gridRow);
  }
  const row = document.createElement("div");
  row.classList.add("box");
  gridRow.appendChild(row);

  if (gridColumn.length > 0) {
    for (let column of gridColumn) {
      const c = document.createElement("div");
      c.classList.add("box");
      column.appendChild(c);
    }
  }
}

function addColumn() {
  if (gridRow.children.length === 0) {
    addRow();
  } else {
    const newColoumn = document.createElement("div");
    newColoumn.classList.add("grid-column");

    let index = 0;
    while (index < gridRow.children.length) {
      const c = document.createElement("div");
      c.classList.add("box");
      newColoumn.appendChild(c);
      index += 1;
    }

    grids.appendChild(newColoumn);
  }
}

function removeRow() {
  if (gridRow.children.length === 1) {
    let count = gridColumn.length - 1;
    while (count >= 0) {
      grids.removeChild(gridColumn[count]);
      count = gridColumn.length - 1;
    }
    gridRow.removeChild(gridRow.children[0]);
    grids.removeChild(gridRow);
  } else if (gridRow.children.length > 1) {
    const row = document.querySelectorAll(".grid-row .box");
    gridRow.removeChild(row[row.length - 1]);

    for (let r of gridColumn) {
      r.removeChild(r.children[r.children.length - 1]);
    }
  }
}

function removeColumn() {
  if (gridColumn.length === 0 && grids.children.length != 0) {
    let count = gridRow.children.length - 1;
    while (count >= 0) {
      gridRow.removeChild(gridRow.children[count]);
      count = gridRow.children.length - 1;
    }
    grids.removeChild(gridRow);
  } else if (gridColumn.length > 0) {
    grids.removeChild(gridColumn[0]);
  }
}

function getBox() {
  boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    box.addEventListener("click", function () {
      box.style.backgroundColor = document.querySelector(".forColor").value;
    });

    box.addEventListener("mouseup", function () {
      click = false;
    });
    box.addEventListener("mousedown", function () {
      click = true;
      box.style.backgroundColor = document.querySelector(".forColor").value;
    });
    //event.bttns === 1
    box.addEventListener("mouseover", function (event) {
      if (click) {
        box.style.backgroundColor = document.querySelector(".forColor").value;
      }
    });
  }
}

document.querySelector("body").addEventListener("mouseup", function () {
  click = false;
});

setInterval(getBox, 1000);

function colorAllUncolor() {
  color = document.querySelector(".forColor").value;
  for (let box of boxes) {
    if (!box.style.backgroundColor) {
      box.style.backgroundColor = color;
    }
  }
}

function colorAll() {
  color = document.querySelector(".forColor").value;
  for (let box of boxes) {
    box.style.backgroundColor = color;
  }
}

function clearAllColors() {
  for (let box of boxes) {
    box.style.backgroundColor = "";
  }
}

//Sets the currColor variable to the color selected in the 'select' element
let colorselect = document.querySelector('select')
colorselect.addEventListener('change',event=>{
    currColor = colorselect.value;
    event.preventDefault()
    console.log(currColor)
})


//Sets the color of the square that is clicked on to currColor (the selected color)
grid.addEventListener('mousedown',event=>{
    
    if(event.target.classList=="square")
        {event.target.style.backgroundColor = currColor}
    event.preventDefault()//Squares occasionally drag without this

})

//Sets the color of all squares that are dragged over to currColor
grid.addEventListener('mouseover',event=>{
    
    if(event.target.classList=="square" && event.buttons==1)
        {event.target.style.backgroundColor = currColor}

})

