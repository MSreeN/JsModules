// import { addToCart } from "./ShoppingCart.js";

console.log("from script file");

// addToCart("shirt")

import * as ShoppingCart from './ShoppingCart.js'

const {addToCart, shoppingCost} = ShoppingCart;

addToCart('shirt')
console.log('cost is', shoppingCost);