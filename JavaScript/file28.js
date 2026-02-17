// const name=["jhon","cathy","amy"]
// const score=[56,78,90]
// name.forEach((name,index,arr)=> {
//     // console.log(name)
//     // console.log(index)
//     // console.log(index,name)
//     // console.log(arr)
//     // console.log(arr[index])
//     console.log(`${name},${score[index]}`)
    
// });

// for(let i=0;i<name.length;i++){
   
//         console.log(name[i],score[i])
//     }


// function add(){
//     // console.log(a)
//     // console.log(b)
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0])
//     console.log(arguments[3])
// }
// add(4,5,6,9);


// function add(...arr){                                               //rest operator
//     let sum=arr.reduce((total,num)=>{
//         return total+num
//     },0)
//     return sum
// }

// const res=add(7,5,8);
// console.log(res)


const add= (...arg)=>{
    let sum=args.reduce((total,num)=>{
        return total+num
    },0)
}

const res=add(2,4,5,9)
console.log(res)