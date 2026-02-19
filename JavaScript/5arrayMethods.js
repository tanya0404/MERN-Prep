// num=[2,5,9,10,18]


//num.forEach(()=>{})                           Used to loop through array and Does NOT return new array
// num.forEach(e => {
//     console.log(e)
// });



//num.map(()=>{})                                  Transforms each element Returns a NEW array
// const newarray=num.map((e)=>{
//     return e+2
// })
// console.log(newarray)



//num.filter(()=>{})                               Returns elements that match a condition and Returns a NEW array
// const newaarray=num.filter((e)=>{
//     return e%2===0
// })
// console.log(newaarray)



//num.find(()=>{})                                  Returns first matching element and Returns single value (not array)
// const newarray=num.find((e)=>{
//     return e>5
// })
// console.log(newarray)



//num.reduce((a,b)=>{},0)                               Used to reduce an array to a single value like(Calculate totals,Sum numbers,Find max/min,Count elements,Flatten arrays,Build objects)
// const res=num.reduce((sum,num)=>{
//     return sum+num
// },0)
// console.log(res)



//num.some(()=>{})                                       Checks if at least one element satisfies condition.
// const res=num.some((e)=>{
//     return e>2
// })
// console.log(res)



//numbers.every(()=>{})                                     Checks if all elements satisfy condition.
// const res=num.every((e)=>{
//     return e>1
// })
// console.log(res)


//---------------------------------------------------------------------------------------------------------------


// const products = [
//   { id: 1, name: "Product 1", desc: "This is description", price: 100 },
//   { id: 2, name: "Product 2", desc: "This is description", price: 120 },
//   { id: 3, name: "Product 3", desc: "This is description", price: 150 },
// ];

// const cart=products.map((e)=>{
//     const obj={...products,
//         quantity:1
//     }
//     return obj
// })
// console.log(cart)



//----------------------------------------------------------------------------------------------------------------


const products = [
  {
    id: 1,
    name: "Product 1",
    desc: "This is description",
    price: 100,
    category: "Laptop",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "This is description",
    price: 120,
    category: "Desktop",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "This is description",
    price: 150,
    category: "Laptop",
  },
  {
    id: 4,
    name: "Product 4",
    desc: "This is description",
    price: 100,
    category: "Laptop",
  },
  {
    id: 5,
    name: "Product 5",
    desc: "This is description",
    price: 120,
    category: "Desktop",
  },
  {
    id: 6,
    name: "Product 6",
    desc: "This is description",
    price: 150,
    category: "Laptop",
  },
];



// const category=products.filter((e)=>{
//     return e.category==="Laptop"
// })
// console.log(category)



// let pid=2;
// const find=products.find((e)=>{
//     return e.id===pid
// })
// console.log(find)