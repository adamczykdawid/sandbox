//importing module
// import { addToCart, tq, totalPrice as price } from './shoppingCart.js';

// addToCart('bread', 5);

// console.log(price, tq);

console.log('importing module');

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, tq, totalPrice as price } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
