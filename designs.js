// Select color input
let color = document.querySelector("#colorPicker");

// Select size input
let grid_height = document.querySelector("#inputHeight");
let grid_width = document.querySelector("#inputWidth");

const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector("#sizePicker")

submit.addEventListener('submit', makeGrid);

// fills color of the cell when clicked
function fillColor(event) {
  event.target.bgColor = color.value;
}

// Creates _N_ by _M_ table Grid
function makeGrid(event) {
  event.preventDefault();
  const grid_height_value = grid_height.value;
  const grid_width_value = grid_width.value;

  // Removes the table
  if (table.hasChildNodes()) {
    table.innerHTML = "";
  }

  // Adds the table with row and cell according to user input
  for (let i = 0; i < grid_height_value; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);

    for (let j = 0; j < grid_width_value; j++) {
      let cell = document.createElement("td");
      cell.addEventListener("click", fillColor);
      row.appendChild(cell);
    }
  }
}
