// import { addToCart } from "./ShoppingCart.js";

console.log("importing shopping cart");

// addToCart("shirt")

import addToCart,* as ShoppingCart from './ShoppingCart.js'
import cloneDeep from './node_modules/lodash-es'

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

console.log(ShoppingCart.cart);

addToCart('apple')

createSupplier.name;
createSupplier.field;
console.log(createSupplier.getName());

//this gives an error because price is private to that iife module and we can't access it outside, this is module pattern. look up on internet for more information
// console.log(createSupplier.price);


//below code is used to maintain state of project using parcel, fo example you have an array of 3 objects inside it, on first render it will show array with 3 objects in it
if(module.hot){
  module.hot.accept();
}