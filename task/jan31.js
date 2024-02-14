
// duplicate elements
let arr = [2,1,2];
let length = arr.length;

for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
        if (arr[i] === arr[j]) {
            console.log(arr[j]);
        }
    }
}

// combination sum
var combinationSum = function(candidates, target) {
    // Create an array dp to store combinations for each target sum
    const dp = new Array(target + 1).fill().map(() => []);
    dp[0] = [[]];

    // Iterate through the candidates
    for (const candidate of candidates) {
        // For each candidate, iterate through the dp array to build combinations
        for (let i = candidate; i <= target; i++) {
            // For each combination at dp[i - candidate], add the current candidate to create new combinations
            for (const combination of dp[i - candidate]) {
                dp[i].push([...combination, candidate]);
            }
        }
    }

    // Flatten the dp array to remove empty arrays
    const result = [];
    for (const combinations of dp[target]) {
        result.push(combinations);
    }

    return result;
};

// Example usage
const candidates = [1,2,3];
const target = 5;
const result = combinationSum(candidates, target);
console.log(result);
