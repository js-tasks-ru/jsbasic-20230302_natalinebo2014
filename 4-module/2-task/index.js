function makeDiagonalRed(table) {
  // ваш код...
  let rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].cells;
    cells[i].style.background = 'red';
  }
}


