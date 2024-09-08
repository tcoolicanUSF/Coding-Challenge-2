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
function calculateTip (bill) {
   let TipPercent = (bill >= 50 && bill<= 300) ? 0.15 : 0.20;
   return bill * TipPercent
}   
calculateTip(100)

//Utilize Arrays
let bills = [430, 40, 275];
const tips = bills.map(bills => calculateTip(bills))
console.log("corresponding stips for bills of $430, $40, and $275 :",tips)
let totals = bills.map(bills=> calculateTip(bills) + bills)
console.log('The totals of each bill with tips will be $(totals)')









