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
//# sourceMappingURL=index.js.map