// Coding Challenge 2
// Calculate the tip
let bill = 275;
let tip = bill * (bill > 50 ? 0.15 : 0.20);
let total = bill + tip;
console.log("Bill: $" + bill);
console.log("Tip: $" + tip);
console.log("Total: $" + total);

//Output details
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);

//Create a function
function calculateTip(bill) {
    return bill * (bill > 50 ? 0.15 : 0.20);
}
calculateTip(100)






