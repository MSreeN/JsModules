// import { addToCart } from "./ShoppingCart.js";
import { Function } from "core-js";
import "core-js/stable";
console.log("importing shopping cart");

// addToCart("shirt")

import addToCart, * as ShoppingCart from "./ShoppingCart.js";

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

//this gives an error because price is private to that iife module and we can't access it outside, this is module pattern. look up on internet for more information
// console.log(createSupplier.price);

//below code is used to maintain state of project using parcel, fo example you have an array of 3 objects inside it, on first render it will show array with 3 objects in it, if you save it then render it again then array would have 6 objects and on next render array will have 12 objects
//what is happening is parcel is saving previous state and adding new state to the previous state
//findings: objects are getting doubled after refreshing the application/page, this feature is meant to be used in development, we don't refresh the application every time when application is in development
if (module.hot) {
  module.hot.accept(function () {
    ShoppingCart.cart.splice(0, ShoppingCart.cart.length);
  });
}
addToCart("apple");
console.log(ShoppingCart.cart);

let name = "sree";
console.log(name);

class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
}

const sree = new Person("sree");
console.log(sree);

const a = ShoppingCart.cart.find((ele) => ele == "apple");
console.log(a);

//transpiling means replacing the equivalent syntax in older versions
//polyfilling means making the new feature work in older version by converting or implementing the same feature using older version syntax, like writing the js code that acts like the new feature in older versions
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 2000);
});

console.log(promise);

//polyfillilng

function sample() {
  console.log("this is sample function");
  const name = "sree";
}

Function.prototype.myFun = function () {
  let obj = this;
  console.log(obj.name);
};

sample.myFun();
