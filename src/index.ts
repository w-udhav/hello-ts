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

// object
// type alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Steve",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.20462;
  return parseInt(weight) * 2.20462;
}

kgToLbs(10);
kgToLbs("10kg");

// intersection
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {
    console.log("drag");
  },
  resize: () => {
    console.log("resize");
  },
};

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(`Hello ${name.toUpperCase()}`);
  else console.log("Hello");
}
greet("Steve");

// optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
console.log(customer?.["birthday"]?.getFullYear());

// Optional call operator
let log: any = console.log;
log?.("a");
