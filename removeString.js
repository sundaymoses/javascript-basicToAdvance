function maximumGain(s, x, y) {
    let points = 0;
    let stack = [];

    // Determine which pair to remove first based on points
    let firstPair = x >= y ? "ab" : "ba";
    let secondPair = x >= y ? "ba" : "ab";
    let firstPoints = x >= y ? x : y;
    let secondPoints = x >= y ? y : x;

    // First pass: Remove higher-value pairs
    for (let char of s) {
        if (stack.length > 0 && 
            ((firstPair === "ab" && stack[stack.length - 1] === 'a' && char === 'b') ||
             (firstPair === "ba" && stack[stack.length - 1] === 'b' && char === 'a'))) {
            stack.pop(); // Remove the matching character
            points += firstPoints; // Add points for the pair
        } else {
            stack.push(char); // Add current character to stack
        }
    }

    // Second pass: Remove lower-value pairs from the remaining stack
    let temp = [];
    for (let char of stack) {
        if (temp.length > 0 && 
            ((secondPair === "ab" && temp[temp.length - 1] === 'a' && char === 'b') ||
             (secondPair === "ba" && temp[temp.length - 1] === 'b' && char === 'a'))) {
            temp.pop(); // Remove the matching character
            points += secondPoints; // Add points for the pair
        } else {
            temp.push(char); // Add current character to temp stack
        }
    }

    return points;
}

// Test case
console.log(maximumGain("abababbabc", 6, 4)); // Expected output: 16