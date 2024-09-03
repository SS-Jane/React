// การสลายโครงสร้าง

// Array type
console.log("Destructuring : Array type");

const color = ["Green", "Red", "Yellow", "Blue"];
const green = color[0];
const red = color[1];

const [g, r, y, b] = color;

console.log(green);
console.log(red);

console.log(g, r, y, b);

// Object type
console.log("\n");

console.log("Destructuring : Object type");

const product = {
  productName: "Computer",
  price: 50000,
  stock: 10,
};

// const name = product.productName
// const price = product.price

const { productName, price, stock } = product;

console.log(productName);
console.log(price);
console.log(stock);
