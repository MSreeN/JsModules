console.log("from shopping cart");


const shoppingCost = 10;
const cart = [];

export default function(item){
  cart.push(item)
  console.log(`item ${item} added to cart`);
}

export {shoppingCost, cart}
