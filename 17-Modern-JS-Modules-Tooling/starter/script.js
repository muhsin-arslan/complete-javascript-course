import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';

import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

addToCart('bread', 5);
console.log(price);
console.log(totalQuantity);

ShoppingCart.addToCart('chocalate', 1);
