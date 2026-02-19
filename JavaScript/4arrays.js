// const names= ["a","b","c"]
// console.log(names)
// names.push("d")                                   // {can add new element}
// console.log(names)


// const arr= [...names,"add"]                      // { add element using spread }
// console.log(arr)

//----------------------------------------------------------------------------------------------

// let cart= []
// cart=[...cart,"iphone"]
// console.log(cart)
// cart=[...cart,"speaker"]
// console.log(cart)

// let cart = []
                          // //Click on add to cart button on iphone product
// cart = [...cart,{name:"iphone",price:45000,qty:1}]
// // console.log(cart)
                          // //Click on add to cart button on speaker product
// cart = [...cart,{name:"speaker",price:1000,qty:1}]
// console.log(cart)


// const products = ["product1", "product2", "product3"];
// for(let i=0;i<products.length;i++){
//     console.log(products[i])
// }
// products.forEach(()=>{})
// products.forEach((product) => console.log(product));

//--------------------------------------------------------------

const products = [
  { id: 1, name: "Product 1", desc: "This is description", price: 100 },
  { id: 2, name: "Product 2", desc: "This is description", price: 120 },
  { id: 3, name: "Product 3", desc: "This is description", price: 150 },
];

let cart = [];
// products.forEach((product) => console.log(product));
products.forEach((product) => {                                      //adding products in cart with quantity and total price using for each loop
  product.quantity = 2
  // product.total = product.price * product.quantity
  // cart.push(product)
  const obj = {                                                       // //adding products in cart with quantity and total price using spread operator
    ...product,
    quantity:product.quantity,
    total: product.price * product.quantity,
  };
  cart = [...cart,obj]
});
console.log(cart);