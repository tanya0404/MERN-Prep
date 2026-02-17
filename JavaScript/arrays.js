// const names= ["a","b","c"]
// console.log(names)
// names.push("d")                                   // {can add new element}
// console.log(names)


// const arr= [...names,"add"]                      // { add element using spread }
// console.log(arr)



// let cart= []
// cart=[...cart,"iphone"]
// console.log(cart)
// cart=[...cart,"speaker"]
// console.log(cart)

// let cart = []
// cart = [...cart,{name:"iphone",price:45000,qty:1}]
// // console.log(cart)

// cart = [...cart,{name:"speaker",price:1000,qty:1}]
// console.log(cart)


// const products = ["product1", "product2", "product3"];
// for(let i=0;i<products.length;i++){
//     console.log(products[i])
// }
// products.forEach(()=>{})
// products.forEach((product) => console.log(product));


// const f1 = () => console.log("Hello World")
// f1()

function greet(f){
    f()
}
greet(() => console.log("Hello World"))