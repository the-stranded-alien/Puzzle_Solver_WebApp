
function harvesting(height, n) {
    let left = [];
    let right = [];
    for (let i = 0; i < n; i++) {
        left[i] = 0;
        right[i] = 0;
    }

    for (let i = 1; i < n; ++i) {
        left[i] = Math.max(height[i - 1], left[i - 1]);
        if (left[i] < height[i]) {
            left[i] = 0;
        }
    }

    for (let i = n - 2; i >= 0; --i) {
        right[i] = Math.max(height[i + 1], right[i + 1]);
        if (right[i] < height[i]) {
            right[i] = 0;
        }
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        let diff = Math.min(left[i], right[i]) - height[i];
        ans += Math.max(diff, 0);
    }
    return ans;
}

let height = [7, 5, 9, 1, 13, 1, 2, 8, 6, 5];
let n = 10;

let ans = harvesting(height, n);
console.log(ans);
