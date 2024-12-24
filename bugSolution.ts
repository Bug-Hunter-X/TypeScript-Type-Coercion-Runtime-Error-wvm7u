function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Inputs must be numbers or parsable strings');
  }
  return numA + numB;  
}

let result1 = add(1, 2); // Correct usage
console.log(result1); // Outputs 3

let result2 = addSafe("1", 2); // Safe usage with error handling for string input
console.log(result2); // Outputs 3

let result3 = addSafe("a", 2); //Example of invalid input
console.log(result3); // Throws an error