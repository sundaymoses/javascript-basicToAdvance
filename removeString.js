function maximumGain(s, x, y) {
    let score = 0;
    let chars = s.split(""); // Convert string to array
    
    // Decide which pair to prioritize
    let firstPair = x >= y ? "ab" : "ba";
    let firstPoints = x >= y ? x : y;
    let secondPair = x >= y ? "ba" : "ab";
    let secondPoints = x >= y ? y : x;
    
    // Keep removing pairs until none left
    let changed = true;
    while (changed) {
        changed = false;
        let temp = [];
        let i = 0;
        
        // Check for first pair
        while (i < chars.length) {
            if (i + 1 < chars.length && chars[i] == firstPair[0] && chars[i + 1] == firstPair[1]) {
                score += firstPoints;
                changed = true;
                i += 2; // Skip both characters
            } else {
                temp.push(chars[i]);
                i++;
            }
        }
        chars = temp;
        
        // Check for second pair
        temp = [];
        i = 0;
        while (i < chars.length) {
            if (i + 1 < chars.length && chars[i] == secondPair[0] && chars[i + 1] == secondPair[1]) {
                score += secondPoints;
                changed = true;
                i += 2; // Skip both characters
            } else {
                temp.push(chars[i]);
                i++;
            }
        }
        chars = temp;
    }
    
    return score;
}