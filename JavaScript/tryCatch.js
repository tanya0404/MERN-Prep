// try{
//     console.log(num)
// }
// catch(err){
//     // console.log("error")
//     // console.log(err)
//     // console.log(err.name)
//     // console.log(err.message);
// }



// const emp=["a","b","c"]
// for(let e in emp){
//     // console.log(e)
//     console.log(emp[e])
// }



// const emp={
//     name:"tanya",
//     age:21
// }
// for(let e in emp){
//     console.log(e)
//     // console.log(emp[e])
// }



// const emp=["a","b","c"]
// for(let e of emp){
//     console.log(e)
// }



const emp={
    name:"tanya",
    age:21
}
for(let e of Object.keys(emp)){
    console.log(emp[e])
}