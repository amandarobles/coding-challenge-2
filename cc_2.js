//task 1 - Working with Arrays
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
products.push("Tablet");
products.pop();
console.log("Updated Products List:", products);

//task 2 - Accessing and Modifying Arrays
let scores = [85, 90, 78, 92, 88];
scores[1] = 95;
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Score:", average);
