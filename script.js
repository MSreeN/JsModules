// import { addToCart } from "./ShoppingCart.js";

console.log("importing shopping cart");

// addToCart("shirt")

import addToCart,* as ShoppingCart from './ShoppingCart.js'

const {shoppingCost} = ShoppingCart;

// addToCart('shirt')
// console.log('cost is', shoppingCost);

const createSupplier = (function () {
  const name = "General Motors";
  const field = "automobile";
  const price = 500;


  const getSupplierName = () => {
    console.log(price);
    return name;
  };


  return {
    name,
    field,
    getName: () => getSupplierName(),
  };
})();


createSupplier.name;
createSupplier.field;
console.log(createSupplier.getName());

