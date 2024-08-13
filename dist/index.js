"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let user = [1, "Steve"];
user.push(2);
console.log(user);
var Size;
(function (Size) {
    Size["Small"] = "small";
    Size["Medium"] = "medium";
    Size["Large"] = "large";
})(Size || (Size = {}));
let size = Size.Small;
console.log(size);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.05;
    return income * 0.1;
}
calculateTax(50000);
let employee = {
    id: 1,
    name: "Steve",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.20462;
    return parseInt(weight) * 2.20462;
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => {
        console.log("drag");
    },
    resize: () => {
        console.log("resize");
    },
};
//# sourceMappingURL=index.js.map