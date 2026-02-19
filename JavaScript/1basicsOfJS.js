// console.log("hello world")

// let a=10
// let b=20
// let c=a+b
// console.log(c)

// name="tanya"
// console.log("Hello" +name)
// console.log(`Hello ${name}`)



// let X=10
// let Y="10"

// console.log(X==Y)                                //checks value only
// console.log(X===Y)                               //checks value and datatype also

// console.log(a>b && a>20)
// console.log(a>b || a>20)


// if(a>b) console.log("a is greater");
// else if(a<b) console.log("b is greater");
// else{
//     console.log("both are equal");
// }


// let i =1
// while(i<=5){
//     console.log(i)
//     i++
// }



// let i =1
// while(i<=5){
//     i++
//     console.log(i)
//     if(i==3) break
// }



// let i =1
// while(i<=5){
//     i++
//     if(i==3) continue
//     console.log(i)
// }


// let i =1
// while(i<=6){
//     console.log(i*5)
//     i++
// }


// function greet(name){
//     console.log("hello"+name)
// }

// greet("john")
// greet("cathy")

// function greet(name,age){
//     console.log(`my name is ${name}. my age is ${age}.`)
// }

// greet("tanya",21)

// function sum(a,b){
//     console.log(`sum is ${a+b}`)
// }

// sum(1,21)


// function add(a,b){
//     return a+b
// }

// let result=add(2,6)
// console.log(result)

/*
| Feature         | var             | let       | const     |
| --------------- | --------------- | --------- | --------- |
| Scope           | Function        | Block     | Block     |
| Re-declare      | Yes             | No        | No        |
| Re-assign       | Yes             | Yes       | No        |
| Hoisting        | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Must initialize | No              | No        | Yes       |
*/


// let a=10
// function f1(){
//     let a=20
//     if(3>1){
//         let a=30
//         console.log(a)
//     }
//     console.log(a)
// }

// f1()
// console.log(a)




// var a=10
// function f1(){
//     var a=20
//     if(3>1){
//         var a=30
//         console.log(a)
//     }
//     console.log(a)
// }

// f1()
// console.log(a)




// let a="10"
// console.log(typeof a)
// let num=parseInt(a)
// console.log(typeof num)


