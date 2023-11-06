// import { addToCart } from "./ShoppingCart.js";

console.log("from script file");

// addToCart("shirt")

import addToCart,* as ShoppingCart from './ShoppingCart.js'

const {shoppingCost} = ShoppingCart;

addToCart('shirt')
console.log('cost is', shoppingCost);