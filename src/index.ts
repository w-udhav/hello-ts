// Basic
let age: number = 20;
if (age < 50) age += 10;
console.log(age);

// Tuple
let user: [number, string] = [1, "Steve"];
user.push(2);
console.log(user);

// Enum
enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
let size: Size = Size.Small;
console.log(size);

// Function
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 0.05;
  return income * 0.1;
}
calculateTax(50000);
