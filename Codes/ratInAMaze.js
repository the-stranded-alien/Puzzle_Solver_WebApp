function printMaze(sol) {
        console.log(sol);
}

function isPlaceable(maze, x, y) {
    if (x >= 0 && x < 6 && y >= 0 && y < 6 && maze[x][y] == 1) return true;
    return false;
}

function solveMazeUtility(maze, x, y, sol) {
    if (x == 5 && y == 5) {
        sol[x][y] = 1;
        return true;
    }

    if (isPlaceable(maze, x, y) == true) {
        sol[x][y] = 1;
        if (solveMazeUtility(maze, x + 1, y, sol) == true) return true;
        if (solveMazeUtility(maze, x, y + 1, sol) == true) return true;
        sol[x][y] = 0;
        return false;
    }

}

function solveMaze(maze) {
    let sol = [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
    ];

    if (solveMazeUtility(maze, 0, 0, sol) == false) {
        console.log("Solution Doesn't Exist !");
        return false;
    }

    printMaze(sol);
    return true;
}

let maze = [[1, 0, 1, 0, 0, 0],
[1, 1, 1, 1, 0, 1],
[0, 0, 1, 0, 0, 0],
[1, 1, 1, 1, 1, 0],
[0, 1, 0, 1, 1, 1],
[0, 0, 1, 1, 1, 0]
];

solveMaze(maze);
