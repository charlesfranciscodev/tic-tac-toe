import { MARK, GRID, RESET, PLAYER, GAME_RESULT } from "../constants";

function createEmptyGrid() {
  let initialGrid = [];
  for (let i = 0; i < GRID.SIZE; i++) {
    initialGrid.push([]);
    for (let j = 0; j < GRID.SIZE; j++) {
      initialGrid[i].push(MARK.EMPTY);
    }
  }
  return initialGrid;
}

function pickRandomPlayer() {
  if (Math.random() < 0.5) {
    return PLAYER.PLAYER_ONE;
  } else {
    return PLAYER.PLAYER_TWO;
  }
}

function createState() {
  let state = {
    "grid": createEmptyGrid(),
    "currentPlayer": pickRandomPlayer(),
    "gameResult": GAME_RESULT.UNKNOWN,
    "scores": [0, 0]
  };
  return state;
}

function computeGameResultForGameOver(currentPlayer) {
  if (currentPlayer === PLAYER.PLAYER_ONE) {
    return GAME_RESULT.WIN;
  } else if (currentPlayer === PLAYER.PLAYER_TWO) {
    return GAME_RESULT.LOSS;
  }
}

function computeGameResult(grid, currentPlayer) {
  // check rows
  for (let row = 0; row < GRID.SIZE; row++) {
    let mark = grid[row][0];
    if (mark === MARK.EMPTY) {
      continue;
    }
    let gameOver = true;
    for (let column = 1; column < GRID.SIZE; column++) {
      if (grid[row][column] !== mark) {
        gameOver = false;
        break;
      }
    }
    if (gameOver) {
      return computeGameResultForGameOver(currentPlayer);
    }
  }

  // check columns
  for (let column = 0; column < GRID.SIZE; column++) {
    let mark = grid[0][column];
    if (mark === MARK.EMPTY) {
      continue;
    }
    let gameOver = true;
    for (let row = 1; row < GRID.SIZE; row++) {
      if (grid[row][column] !== mark) {
        gameOver = false;
        break;
      }
    }
    if (gameOver) {
      return computeGameResultForGameOver(currentPlayer);
    }
  }

  // check diagonals
  // top left to bottom right
  let gameOver = true;
  let mark = grid[0][0];
  if (mark !== MARK.EMPTY) {
    for (let i = 1; i < GRID.SIZE; i++) {
      if (grid[i][i] !== mark) {
        gameOver = false;
        break;
      }
    }
    if (gameOver) {
      return computeGameResultForGameOver(currentPlayer);
    }
  }

  // bottom left to top right
  gameOver = true;
  let row = 2;
  let column = 0;
  mark = grid[row][column];
  if (mark !== MARK.EMPTY) {
    while (column < GRID.SIZE) {
      if (grid[row][column] !== mark) {
        gameOver = false;
        break;
      }
      row--;
      column++;
    }

    if (gameOver) {
      return computeGameResultForGameOver(currentPlayer);
    }
  }

  // check for draw
  for (let row = 0; row < GRID.SIZE; row++) {
    for (let column = 0; column < GRID.SIZE; column++) {
      if (grid[row][column] === MARK.EMPTY) {
        return GAME_RESULT.UNKNOWN;
      }
    }
  }

  return GAME_RESULT.DRAW;
}

function computeScores(gameResult, scores) {
  if (gameResult === GAME_RESULT.WIN) {
    scores[0] += 1;
  } else if (gameResult === GAME_RESULT.LOSS) {
    scores[1] += 1;
  }
}

function handleMove(state, action) {
  let nextState = {};

  nextState["grid"] = [...state.grid];
  nextState["grid"][action.row][action.column] = action.mark;

  nextState["gameResult"] = computeGameResult(nextState["grid"], state["currentPlayer"]);

  nextState["scores"] = [...state.scores];
  computeScores(nextState["gameResult"], nextState["scores"]);

  if (nextState["gameResult"] === GAME_RESULT.UNKNOWN) {
    if (action.player === PLAYER.PLAYER_ONE) {
      nextState["currentPlayer"] = PLAYER.PLAYER_TWO;
    } else if (action.player === PLAYER.PLAYER_TWO) {
      nextState["currentPlayer"] = PLAYER.PLAYER_ONE;
    }
  } else {
    // the game is over
    nextState["grid"] = createEmptyGrid();
    nextState["currentPlayer"] = state["currentPlayer"];
    nextState["gameResult"] = GAME_RESULT.UNKNOWN;
  }

  return nextState
}

export function playMove(state=createState(), action) {
  switch (action.type) {
    case GRID.PLAY_MOVE:
      return handleMove(state, action);
    case RESET:
      return createState();
    default:
      return state;
  }
}
