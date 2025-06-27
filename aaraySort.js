// Function to sort an array of numbers in ascending order
function sortNumbersAscending(inputArray) {
    // Validate that the input is an array
    if (!Array.isArray(inputArray)) {
        console.error("Error: Input must be an array.");
        return null;
    }

    // Validate that all elements are numbers
    const isValid = inputArray.every(item => typeof item === 'number' && !isNaN(item));
    if (!isValid) {
        console.error("Error: All elements must be valid numbers.");
        return null;
    }

    // Create a copy of the input array to avoid modifying the original
    const arrayToSort = [...inputArray];
    console.log("Original array:", arrayToSort);

    // Sort the array using a comparison function
    arrayToSort.sort(function compareNumbers(firstNumber, secondNumber) {
        // Compare two numbers:
        // - Return negative if firstNumber should come before secondNumber
        // - Return positive if secondNumber should come before firstNumber
        // - Return 0 if order doesn't matter
        const difference = firstNumber - secondNumber;
        console.log(`Comparing ${firstNumber} and ${secondNumber}: ${difference}`);
        return difference;
    });

    // Log the sorted array for debugging
    console.log("Sorted array (ascending):", arrayToSort);
    // Return the sorted array
    return arrayToSort;
}
// Example usage in the context of QES verification test mode
const testData = [1, 15, 4,6,32,440,0,3,4];
console.log("Starting QES test mode sorting...");
const sortedResult = sortNumbersAscending(testData);
if (sortedResult) {
    console.log("Final sorted result for QES test:", sortedResult);
} else {
    console.log("Sorting failed due to invalid input.");
}