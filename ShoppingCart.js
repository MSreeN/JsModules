console.log("from shopping cart");


const shoppingCost = 10;
const cart = [];

export function addToCart(item){
  cart.push(item)
  console.log(`item ${item} added to cart`);
}