const menu = {
  california: {
    toppings: ['chicken', 'artichokes', 'goat cheese'],
    price: '$12'
  },
  greek:{
    toppings: ['feta cheese', 'black olives', 'red onion'],
    price: '$10'
  },
  chicago:{
    toppings: ['pepperoni','sausage','mushrooms'],
    price: '$15'
  },
  tin_crust:{
    toppings: ['mushrooms', 'olives', 'green pepper'],
    price: '$7'
  },
  pepperoni:{
    toppings: ['pepperoni', 'cheese', 'olives'],
    price: '$5'
  }
};

let objKeys = Object.keys(menu);
console.log(objKeys);
console.log();

console.log(menu.hasOwnProperty('banana'));
console.log();

objKeys.forEach((key, val) => {
  console.log(key + "   " + menu[key].price);
  
  let tops = menu[key].toppings.toString();
  console.log(tops.split(',').join(',  '));
  console.log();
});
