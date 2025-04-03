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



// export function add(numbers: string): number {
//     if (numbers === "") return 0;
    
//     let delimiter = /,|\n/; // Default delimiters: comma and newline
  
//     // Check for custom delimiter format "//[delimiter]\n[numbers...]"
//     if (numbers.startsWith("//")) {
//       const parts = numbers.split("\n");
//       let customDelimiter = parts[0].slice(2); // Extract delimiter
  
//       // Escape special characters in the delimiter (e.g., "|", "$", "^")
//       customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
//       delimiter = new RegExp(customDelimiter); // Convert to RegExp
//       numbers = parts[1]; // Extract number part
//     }
  
//     // Split using the delimiter and parse numbers
//     const numArray = numbers.split(delimiter).map(num => parseInt(num));
  
//     return numArray.reduce((sum, num) => sum + num, 0);
// }


// --------------------------------------------------------------------------------
  

// export function add(numbers: string): number {
//     if (numbers === "") return 0;
    
//     let delimiter = /,|\n/; // Default delimiters
  
//     // Check for custom delimiter
//     if (numbers.startsWith("//")) {
//       const parts = numbers.split("\n");
//       let customDelimiter = parts[0].slice(2); // Extract delimiter
//       customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
//       delimiter = new RegExp(customDelimiter); // Convert to RegExp
//       numbers = parts[1]; // Extract numbers part
//     }
  
//     // Convert string to number array
//     const numArray = numbers.split(delimiter).map(num => parseInt(num));
  
//     // Find negative numbers
//     const negatives = numArray.filter(num => num < 0);
//     if (negatives.length > 0) {
//       throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
//     }
  
//     return numArray.reduce((sum, num) => sum + num, 0);
// }


// --------------------------------------------------------------------------------


// export function add(numbers: string): number {
//     if (numbers === "") return 0;
    
//     let delimiter = /,|\n/; // Default delimiters
  
//     // Check for custom delimiter
//     if (numbers.startsWith("//")) {
//       const parts = numbers.split("\n");
//       let customDelimiter = parts[0].slice(2); // Extract delimiter
//       customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
//       delimiter = new RegExp(customDelimiter); // Convert to RegExp
//       numbers = parts[1]; // Extract numbers part
//     }
  
//     // Convert string to number array
//     const numArray = numbers.split(delimiter).map(num => parseInt(num));
  
//     // Find negative numbers
//     const negatives = numArray.filter(num => num < 0);
//     if (negatives.length > 0) {
//       throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
//     }
  
//     // Filter out numbers greater than 1000
//     return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
// }  
  

// --------------------------------------------------------------------------------


// export function add(numbers: string): number {
//     if (numbers === "") return 0;
  
//     let delimiter = /,|\n/; // Default delimiters
  
//     // Check for custom delimiter
//     if (numbers.startsWith("//")) {
//       const parts = numbers.split("\n");
//       let delimiterPart = parts[0].slice(2); // Extract delimiter part
  
//       // Check for multi-character delimiters
//       const multiCharDelimMatch = delimiterPart.match(/\[(.*?)\]/g);
//       if (multiCharDelimMatch) {
//         // Join multiple delimiters
//         delimiter = new RegExp(multiCharDelimMatch.map(d => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|"));
//       } else {
//         delimiter = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special chars
//       }
  
//       numbers = parts[1]; // Extract numbers part
//     }
  
//     // Convert string to number array
//     const numArray = numbers.split(delimiter).map(num => parseInt(num));
  
//     // Find negative numbers
//     const negatives = numArray.filter(num => num < 0);
//     if (negatives.length > 0) {
//       throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
//     }
  
//     // Filter out numbers greater than 1000
//     return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
// }
  

// --------------------------------------------------------------------------------



export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\n/; // Default delimiters (comma and newline)
    let numberPart = numbers;
    let isMultiplication = false;

    // Check for custom delimiter syntax
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.*)\n/);
        if (delimiterMatch) {
            const delimiterPart = delimiterMatch[1];
            numberPart = numbers.slice(delimiterMatch[0].length);

            // Handling multiple custom delimiters with any length
            const multiCharDelimMatch = delimiterPart.match(/\[(.*?)\]/g);
            if (multiCharDelimMatch) {
                delimiter = new RegExp(multiCharDelimMatch.map(d => 
                    d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                ).join("|"));
            } else {
                delimiter = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            }
            if(delimiter.source === "\\*"){
                isMultiplication = true;
            }
        }
    }

    // Split numbers using the defined delimiters
    const numArray = numberPart.split(delimiter).map(num => parseInt(num, 10));

    // Handle negative numbers
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    // Ignore numbers greater than 1000
    // return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    return isMultiplication ? numArray.filter(num => num <= 1000).reduce((acc,num) => acc * num,1) : numArray.filter(num => num <= 1000).reduce((acc,num) => acc + num, 0);
}
