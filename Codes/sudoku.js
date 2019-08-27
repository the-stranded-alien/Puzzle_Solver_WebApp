const N = 9

function canPlace(num, board, x, y) {
    for (let i = 0; i < N; i++) {
        if (board[i][y] == num) return false;
        if (board[x][i] == num) return false;
    }

    let rootDim = Math.sqrt(N);
    let subBoxRow = x - x % rootDim;
    let subBoxCol = y - y % rootDim;
    for (let i = subBoxRow; i < subBoxRow + rootDim; ++i) {
        for (let j = subBoxCol; j < subBoxCol + rootDim; ++j) {
            if (board[i][j] == num) return false;
        }
    }
    return true;
}

function sudoku(board, x, y) {
    if (x == N) return true;
    if (y == N) {
        return sudoku(board, x + 1, 0);
    }
    if (board[x][y] != 0) {
        return sudoku(board, x, y + 1);
    }
    for (let curNum = 1; curNum <= N; ++curNum) {
        if (canPlace(curNum, board, x, y)) {
            board[x][y] = curNum;
            let success = sudoku(board, x, y + 1);
            if (success) return true;
            board[x][y] = 0; //backtracking
        }
    }
    return false;
}

let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

console.log("The Unsolved Sudoku Looks Like : ");
console.log(board);

let isSuccessful = sudoku(board, 0, 0);

if (isSuccessful) {
    console.log("Yipee !! We Got It Solved !");
    console.log(board);
} else {
    console.log("Hey Man !! Get It Solved From Someone Else !");
}