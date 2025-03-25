// export function add(numbers: string): number {
//     return numbers === "" ? 0 : -1;  // Temporary implementation
//   }

// --------------------------------------------------------------------------------

// export function add(numbers: string): number {
// if (numbers === "") return 0;
// return parseInt(numbers); // Convert string to integer
// }

// --------------------------------------------------------------------------------

// export function add(numbers: string): number {
//     if (numbers === "") return 0;
    
//     const numArray = numbers.split(",").map(num => parseInt(num)); // Split and convert to numbers
//     return numArray.reduce((sum, num) => sum + num, 0); // Sum up the numbers
// }

// --------------------------------------------------------------------------------


// export function add(numbers: string): number {
//     if (numbers === "") return 0;
    
//     // Replace new lines with commas, then split
//     const numArray = numbers.replace(/\n/g, ",").split(",").map(num => parseInt(num));
  
//     return numArray.reduce((sum, num) => sum + num, 0);
// }


// --------------------------------------------------------------------------------



export function add(numbers: string): number {
    if (numbers === "") return 0;
    
    let delimiter = /,|\n/; // Default delimiters: comma and newline
  
    // Check for custom delimiter format "//[delimiter]\n[numbers...]"
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      let customDelimiter = parts[0].slice(2); // Extract delimiter
  
      // Escape special characters in the delimiter (e.g., "|", "$", "^")
      customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
      delimiter = new RegExp(customDelimiter); // Convert to RegExp
      numbers = parts[1]; // Extract number part
    }
  
    // Split using the delimiter and parse numbers
    const numArray = numbers.split(delimiter).map(num => parseInt(num));
  
    return numArray.reduce((sum, num) => sum + num, 0);
}
  