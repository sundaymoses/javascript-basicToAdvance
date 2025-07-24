function maximumGain(s, x, y) {
    let total = 0;

    // Helper function to remove substrings and calculate score using a for loop
    function removeSubstr(s, first, second, points) {
        let stack = [];
        let score = 0;

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (stack.length > 0 && stack[stack.length - 1] === first && char === second) {
                stack.pop();
                score += points;
            } else {
                stack.push(char);
            }
        }

        return [stack.join(''), score];
    }

    let score1 = 0, score2 = 0;

    // Decide which substring to remove first based on higher points
    if (x > y) {
        [s, score1] = removeSubstr(s, 'a', 'b', x);
        [s, score2] = removeSubstr(s, 'b', 'a', y);
    } else {
        [s, score1] = removeSubstr(s, 'b', 'a', y);
        [s, score2] = removeSubstr(s, 'a', 'b', x);
    }

    return score1 + score2;
}

// Example usage:
console.log(maximumGain("cdbcbbaaabab", 4, 5)); // Output: 19
