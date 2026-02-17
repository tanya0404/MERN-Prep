// const url="https://jsonplaceholder.typicode.com/users"

// async function fetchData(){
//     const response=await fetch(url)
//     const res=await response.json()
//     console.log(res)
// }
// fetchData()


//-----------------------------------------------------------------------


// const student={
//     name:"tanya",
//     age:21
// }
// // console.log(student)
// const res=JSON.stringify(student)
// console.log(res)


//--------------------------------------------------------------------------


const student='{"name":"tanya","age":21}'
const res=JSON.parse(student)
console.log(res)