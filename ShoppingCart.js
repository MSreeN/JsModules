console.log("from shopping cart");


const shoppingCost = 10;
const cart = [];

console.log("start fetching");

// await fetch('https://jsonplaceholder.typicode.com/posts');

console.log("done fetching");

export default function(item){
  cart.push(item)
  console.log(`item ${item} added to cart`);
}

export {shoppingCost, cart}
