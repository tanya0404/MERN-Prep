import products from "./products.js";


// const cart = [];

// function addToCart(itemId) {
//   const item =products.find(p => p.id === itemId);
//     cart.push({...item,quantity:1})
// }

// function increment(itemId){
//     const item=cart.find(item=>item.id===itemId);
//     if(item){
//         item.quantity++;
//     }
// }

// function decrement(itemId){
//     const item=cart.find(item=>item.id==itemId);
//     if(item){
//         item.quantity--;
//     }
// }

// const userEmail = "john@gmail.com";
// function calculateTotal() {
//   let total = cart.reduce((sum,item)=>{
//     sum+item.price*item.quantity
//   },0);
  
//   return total;
// }
// function placeOrder(email){

//    if(cart.length === 0) {
//     console.log("Cart is empty");
//     return;
//   }
//   const total = calculateTotal();

//     const order={
//       email:userEmail,
//       userId:123,
//       items:cart,
//       orderDate:new Date(),
//       orderValue:total
//     }
//      console.log(`Order placed successfully by ${email}`);
// order.items.forEach(({name, price, quantity}) => {
//   console.log(`${name} -> ${quantity} x ${price} = ${price * quantity}`);
// });
//   // console.log("product total", productTotal)
//   console.log("Total order value", total);
// }


// addToCart(1)
// addToCart(3)
// addToCart(5)
// // console.log(cart)
// increment(1)
// increment(5)
// increment(1)
// // console.log(cart)
// decrement(1)
// // console.log(cart)
// placeOrder("abc@gmail.com")



// products.forEach(element => {
//   console.log(`${element.id}-${element.name}-${element.desc}-${element.price}`)
// });

console.table(products)