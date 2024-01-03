function sumOfPositiveNumbers(numbers) {
  // Ensure input is an array
  if (!Array.isArray(numbers)) {
    throw new Error("Invalid input: Please provide an array of numbers.");
  }

  // Initialize the sum to zero
  let sum = 0;

  // Loop through the array and add positive numbers to the sum
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && numbers[i] > 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

// Test Case:
const testArray = [1, -2, 3, 4, -5, 6];
const result = sumOfPositiveNumbers(testArray);
console.log(result); // Expected Output: 14 (1 + 3 + 4 + 6)

const testArray2 = [9, -2, 31, 0, -5, -6, 5];
const result2 = sumOfPositiveNumbers(testArray2);
console.log(result2); // Expected Output: 45 (9 + 31 + 0 + 5)
