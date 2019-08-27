function knapsack(W, wt, val, n) {
    let k = [];
    for (let i = 0; i < W; i++) k[i] = [];

    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            for (let w = 0; w <= W; w++) if (i == 0 || w == 0) k[i][w] = 0;
            else if (wt[i - 1] <= w) k[i][w] = Math.max(val[i - 1] + k[i - 1][w - wt[i - 1]], k[i - 1][w]);
            else k[i][w] = k[i - 1][w];
        }
    }
    return k[n][W];
}

let n = 3;
let val = [100,50,150];
let wt = [20, 10, 30];
let W = 50;

let result = knapsack(W, wt, val, n);
console.log(result);