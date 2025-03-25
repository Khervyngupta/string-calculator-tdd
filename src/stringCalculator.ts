// export function add(numbers: string): number {
//     return numbers === "" ? 0 : -1;  // Temporary implementation
//   }

  export function add(numbers: string): number {
    if (numbers === "") return 0;
    return parseInt(numbers); // Convert string to integer
  }
  