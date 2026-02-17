import products from "./products.js";

function show(){
    // products.forEach((e)=>{
    //     console.log(`${e.id}-${e.name}-${e.desc}-${e.price}-${e.category}`)
    // })
    console.table(products)
}

export default show