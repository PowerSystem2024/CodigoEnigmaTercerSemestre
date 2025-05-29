let board = [];
let visited = [];
let n = 8;
let delay = 300;
let running = false;
let paused = false;
let pathPositions = [];

const dx = [2, 1, -1, -2, -2, -1, 1, 2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

const boardContainer = document.getElementById('board');
const boardStaticContainer = document.getElementById('boardStatic');
const positionsIndexBoard = document.getElementById('positionsIndexBoard');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');

startBtn.addEventListener('click', () => {
  if (running) return;
  n = parseInt(document.getElementById('size').value);
  if (n < 5 || n > 10) {
    alert('El tamaño debe estar entre 5 y 10.');
    return;
  }
  initBoards();
  running = true;
  paused = false;
  pathPositions = [];
  knightTour(0, 0, 1).then(() => {
    running = false;
    updateStaticBoard();
  });
});

pauseBtn.addEventListener('click', () => {
  if (!running) return;
  paused = !paused;
  pauseBtn.textContent = paused ? 'Continuar' : 'Pausar';
});

function initBoards() {
  boardContainer.innerHTML = '';
  boardContainer.style.gridTemplateColumns = `repeat(${n}, 45px)`;

  boardStaticContainer.innerHTML = '';
  boardStaticContainer.style.gridTemplateColumns = `repeat(${n}, 45px)`;

  positionsIndexBoard.innerHTML = '';
  positionsIndexBoard.style.gridTemplateColumns = `repeat(${n}, 35px)`;

  board = Array.from({ length: n }, () => Array(n).fill(0));
  visited = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n * n; i++) {
    boardContainer.appendChild(document.createElement('div'));
    boardStaticContainer.appendChild(document.createElement('div'));
    positionsIndexBoard.appendChild(document.createElement('div'));
  }
}

function delayMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitUntilResumed() {
  while (paused) {
    await delayMs(100);
  }
}

async function knightTour(x, y, moveCount) {
  if (paused) {
    await waitUntilResumed();
  }

  board[x][y] = moveCount;
  visited[x][y] = true;
  pathPositions.push({ x, y });

  updateAnimatedBoard(moveCount);
  updatePositionsIndexBoard(moveCount);

  await delayMs(delay);

  if (moveCount === n * n) {
    return true;
  }

  // Usar heurística Warnsdorff para elegir el siguiente movimiento (opcional)
  let moves = [];
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (isValid(nx, ny) && !visited[nx][ny]) {
      moves.push({ nx, ny, degree: countMoves(nx, ny) });
    }
  }
  // Ordenar por menor grado (menos opciones adelante)
  moves.sort((a, b) => a.degree - b.degree);

  for (const move of moves) {
    if (await knightTour(move.nx, move.ny, moveCount + 1)) {
      return true;
    }
  }

  // Backtracking
  board[x][y] = 0;
  visited[x][y] = false;
  pathPositions.pop();

  updateAnimatedBoard(moveCount - 1);
  updatePositionsIndexBoard(moveCount - 1);

  await delayMs(delay);

  return false;
}

function isValid(x, y) {
  return x >= 0 && y >= 0 && x < n && y < n;
}

function countMoves(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (isValid(nx, ny) && !visited[nx][ny]) {
      count++;
    }
  }
  return count;
}

function updateAnimatedBoard(currentMove) {
  const cells = boardContainer.children;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      const cell = cells[idx];
      const val = board[i][j];
      cell.textContent = val > 0 ? val : '';
      cell.className = '';
      if (val > 0) cell.classList.add('visited');
      if (val === currentMove) cell.classList.add('current');
    }
  }
}

function updateStaticBoard() {
  const cells = boardStaticContainer.children;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      const cell = cells[idx];
      const val = board[i][j];
      cell.textContent = val > 0 ? val : '';
      cell.className = '';
      if (val > 0) cell.classList.add('visited');
    }
  }
}

function updatePositionsIndexBoard(currentMove) {
  const cells = positionsIndexBoard.children;
  for (let i = 0; i < n * n; i++) {
    const cell = cells[i];
    cell.textContent = '';
    cell.className = '';
  }

  for (let i = 0; i < pathPositions.length; i++) {
    const pos = pathPositions[i];
    const idx = i;
    const cell = cells[idx];
    cell.textContent = `(${pos.x},${pos.y})`;
    cell.classList.add('visited');
  }

  if (pathPositions.length > 0) {
    const lastIdx = pathPositions.length - 1;
    cells[lastIdx].classList.add('current');
  }
}
