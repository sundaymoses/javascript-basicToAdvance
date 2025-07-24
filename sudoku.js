<!DOCTYPE html>
<html>
<head>
  <title>Simple Sudoku</title>
  <style>
    table { border-collapse: collapse; margin: 20px; }
    td { width: 40px; height: 40px; border: 1px solid #000; text-align: center; font-size: 18px; }
    .box { border: 2px solid #000; }
    .sums { margin: 20px; font-size: 16px; }
    .selected { background-color: #e0e0e0; }
  </style>
</head>
<body>
  <table id="grid"></table>
  <div id="sums" class="sums"></div>
  <script>
    // Initialize 9x9 grid with some numbers
    let grid = [
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6],
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]
    ];

    // Define 3x3 box coordinates
    const boxes = [
      { row: 0, col: 0 }, // Top-left
      { row: 0, col: 3 }, // Top-center
      { row: 0, col: 6 }, // Top-right
      { row: 3, col: 0 }, // Middle-left
      { row: 3, col: 3 }, // Middle-center
      { row: 3, col: 6 }, // Middle-right
      { row: 6, col: 0 }, // Bottom-left
      { row: 6, col: 3 }, // Bottom-center
      { row: 6, col: 6 }  // Bottom-right
    ];

    // Render grid
    function renderGrid() {
      const table = document.getElementById('grid');
      table.innerHTML = '';
      for (let i = 0; i < 9; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 9; j++) {
          const cell = row.insertCell();
          cell.textContent = grid[i][j] || '';
          cell.className = (i % 3 === 0 && j % 3 === 0) ? 'box' : '';
          cell.onclick = () => selectCell(i, j, cell);
        }
      }
      updateSums();
    }

    // Handle cell selection and input
    function selectCell(row, col, cell) {
      document.querySelectorAll('td').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      const input = prompt('Enter a number (1-9):');
      const num = parseInt(input);
      if (num >= 1 && num <= 9 && isValidMove(row, col, num)) {
        grid[row][col] = num;
        renderGrid();
      } else if (input !== null) {
        alert('Invalid move or input!');
      }
    }

    // Validate move
    function isValidMove(row, col, num) {
      // Check row
      if (grid[row].includes(num)) return false;
      // Check column
      if (grid.some(r => r[col] === num)) return false;
      // Check 3x3 box
      const boxRow = Math.floor(row / 3) * 3;
      const boxCol = Math.floor(col / 3) * 3;
      for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
          if (grid[i][j] === num) return false;
        }
      }
      return true;
    }

    // Calculate and display box sums using reduce
    function updateSums() {
      const sumsDiv = document.getElementById('sums');
      const sums = boxes.map((box, idx) => {
        const sum = Array.from({ length: 3 }, (_, i) =>
          Array.from({ length: 3 }, (_, j) => grid[box.row + i][box.col + j])
        ).flat().reduce((acc, val) => acc + (val || 0), 0);
        return `Box ${idx + 1} (${['Top-left', 'Top-center', 'Top-right', 'Middle-left', 'Middle-center', 'Middle-right', 'Bottom-left', 'Bottom-center', 'Bottom-right'][idx]}): ${sum}`;
      });
      sumsDiv.textContent = sums.join(' | ');
    }

    // Initialize game
    renderGrid();
  </script>
</body>
</html>