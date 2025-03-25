// export function add(numbers: string): number {
//     return numbers === "" ? 0 : -1;  // Temporary implementation
//   }

// export function add(numbers: string): number {
// if (numbers === "") return 0;
// return parseInt(numbers); // Convert string to integer
// }

export function add(numbers: string): number {
    if (numbers === "") return 0;
    
    const numArray = numbers.split(",").map(num => parseInt(num)); // Split and convert to numbers
    return numArray.reduce((sum, num) => sum + num, 0); // Sum up the numbers
}  
  