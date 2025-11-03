const fs = require('fs')

// Calculates the sum of all numbers
function Sum(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    let nums = content.split('\n');
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i] = parseFloat(nums[i]);
        sum = sum + nums[i];
    }

    return sum;
}

// Finds the highest and lowest numbers
function MinMax(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    let nums = content.split('\n');
    let lowest = parseFloat(nums[0]);
    let highest = lowest;
    for (let i = 1; i < nums.length; i++) {
        nums[i] = parseFloat(nums[i]);
        if (nums[i] < lowest) {
            lowest = nums[i];
        }
        else {
            if (nums[i] > highest) {
                highest = nums[i];
            }
        }
    }

    return [lowest, highest];
}

// Calculates the average of all numbers
function CalculateAverage(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    nums = content.split('\n');
    sum = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i] = parseFloat(nums[i]);
        sum = sum + nums[i];
    }

    return sum / nums.length;
}

console.log(Sum("./data/sample-numbers.txt"));
console.log(MinMax("./data/sample-numbers.txt"));
console.log(CalculateAverage("./data/sample-numbers.txt"));

module.exports = {
    Sum,
    MinMax,
    CalculateAverage
}