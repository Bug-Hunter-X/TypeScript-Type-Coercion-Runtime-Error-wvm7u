function add(a: number, b: number): number {
  return a + b;
}

let result = add("1", 2); // This line will cause a runtime error because of type coercion
console.log(result); // Outputs NaN