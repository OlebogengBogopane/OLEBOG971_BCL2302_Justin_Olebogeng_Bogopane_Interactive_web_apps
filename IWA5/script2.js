const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let shipping, currency;
const customers = 1;
const location = 'RSA';

if (location === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (location === 'NAM') {
  shipping = 600;
  currency = '$';
} else {
  shipping = 800;
  currency = '$';
}

console.log(BANNED_WARNING);

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * parseInt(NONE_SELECTED);
const batteries = 35 * 2;
const pens = 5 * parseInt(NONE_SELECTED);

const totalPrice = shoes + toys + shirts + batteries + pens;

if (totalPrice > 1000) {
  if (location === 'NAM' && customers < 2) {
    shipping = 0;
  }
}

console.log(FREE_WARNING);

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (location === 'NK') {
  console.log(BANNED_WARNING);
}

console.log('price', currency, shoes + batteries + pens + shirts + shipping);