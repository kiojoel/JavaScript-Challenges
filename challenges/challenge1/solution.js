function countVowels(str) {
  // Convert the string to lowercase to make it case-insensitive
  const lowerStr = str.toLowerCase();

  // Define the set of vowels
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  // Count the number of vowels in the string
  const count = Array.from(lowerStr).reduce((acc, char) => {
    if (vowels.has(char)) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return count;
}

// Example usage:
const example1 = "Hello, World!";
console.log(countVowels(example1)); // Output: 3

const example2 = "Programming is fun";
console.log(countVowels(example2)); // Output: 5
