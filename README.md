# TypeScript Type Coercion Runtime Error

This example demonstrates a common runtime error in TypeScript that arises from implicit type coercion.  The `add` function is defined to accept two numbers, but the call to `add("1", 2)` passes a string and a number. TypeScript's type system allows this, but the `+` operator performs string concatenation in this case, resulting in "12" which is implicitly converted to `NaN` when logged to the console.

This highlights the importance of explicit type checking and handling potential type mismatches to avoid unexpected runtime behavior.