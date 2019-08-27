function change(val, coins, memo, n) {
    if (val == 0) return 0;
    if (memo[val] != -1) return memo[val];
    let ans = 9999;
    for (let i = 0; i < n; ++i) {
        let remVal = val - coins[i];
        if (remVal >= 0) {
            let remChange = change(remVal, coins, memo, n);
            ans = Math.min(ans, remChange + 1);
        }
    }
    memo[val] = ans;
    return ans;
}

let n = 5;

let coins = [1, 2, 5, 10, 20];

let memo = [];

for (let i = 0; i <= 100; ++i) {
    memo[i] = -1;
}

let val = 53;

let ans = change(val, coins, memo, n);

console.log(ans);

