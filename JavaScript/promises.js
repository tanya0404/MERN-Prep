// function makePayment() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Payment has been recieved")
//         resolve()
//     },5000)
//   });
// }

// function sendConfirmation() {
//   console.log("Order has been placed successfully");
// }
// //call back hell
// //makePayment(sendConfirmation);
// makePayment()
//   .then(() => sendConfirmation())
//   .catch((err) => console.log(err));






// function f1(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("f1")
//         resolve()
//        },3000)

//     });
// }

// function f2(){
//     console.log("this is f2")
// }

// // f1().then(()=>f2()).catch((err)=> console.log(err))

// async function main(){
//     await f1()
//     f2()
// }

// main()






function f1(x){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log(x)
        if (x%2===0)resolve()
        else reject()
       },3000)

    });
}


async function main(){
    try {
        await f1(4)
        console.log("Program completed successfully")
    } catch (err) {
        console.log("Promise rejected!")
    }
}

main()