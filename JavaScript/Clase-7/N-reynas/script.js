function solveNQueens(n) {
  const solutions = [];
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  const queens = Array(n).fill(-1);

  function backtrack(r = 0) {
    if (r === n) {
      solutions.push([...queens]);
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;
      queens[r] = c;
      cols.add(c);
      diag1.add(r - c);
      diag2.add(r + c);
      backtrack(r + 1);
      cols.delete(c);
      diag1.delete(r - c);
      diag2.delete(r + c);
    }
  }

  backtrack();
  return solutions;
}

const boardProcess = document.getElementById("boardProcess");
const boardFinal   = document.getElementById("boardFinal");
const indicesEl    = document.getElementById("indices");
const infoEl       = document.getElementById("info");
const nInput       = document.getElementById("n");
const solveBtn     = document.getElementById("solveBtn");
const nextBtn      = document.getElementById("nextBtn");

let solutions = [];
let current   = 0;

function showAlert(msg) {
  infoEl.innerHTML = `<div class="alert">${msg}</div>`;
}

function drawBoard(targetEl, queensArray) {
  const n = queensArray.length;
  targetEl.style.setProperty("grid-template-columns", `repeat(${n}, var(--cell-size))`);
  targetEl.innerHTML = "";
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const cell = document.createElement("div");
      cell.className = "cell " + ((r + c) % 2 ? "black" : "white");
      if (queensArray[r] === c) cell.textContent = "♛";
      targetEl.appendChild(cell);
    }
  }
}

function animateSolution(solution) {
  const n = solution.length;
  const partial = Array(n).fill(-1);
  drawBoard(boardProcess, partial);
  drawBoard(boardFinal, Array(n).fill(-1));
  indicesEl.textContent = "";

  let row = 0;
  const stepMs = 400;
  const interval = setInterval(() => {
    partial[row] = solution[row];
    drawBoard(boardProcess, partial);
    row++;
    if (row === n) {
      clearInterval(interval);
      drawBoard(boardFinal, solution);
      indicesEl.textContent = `Índices de columnas: [${solution.join(', ')}]`;
    }
  }, stepMs);
}

solveBtn.addEventListener("click", () => {
  const n = parseInt(nInput.value);
  if (n < 8) {
    showAlert("Por favor ingresa un valor de N mayor o igual a 8.");
    return;
  }
  solutions = solveNQueens(n);
  current = 0;
  if (solutions.length === 0) {
    showAlert("No hay soluciones para N = " + n);
    return;
  }
  showAlert(`Mostrando solución #1 de ${solutions.length}.`);
  animateSolution(solutions[0]);
  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % solutions.length;
  showAlert(`Mostrando solución #${current + 1} de ${solutions.length}.`);
  animateSolution(solutions[current]);
});
