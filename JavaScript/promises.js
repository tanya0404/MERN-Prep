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




//--------------------------------------------------------------



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




//--------------------------------------------------------------



// function f1(x){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         if (x%2===0)resolve(`${x} is even num`)
//         else reject()
//        },3000)

//     });
// }


// async function main(){
//     let num=Math.round(Math.random()*10)
//     try {
//         const res=await f1(num)
//         console.log(res)
//         console.log("Program completed successfully")
//     } catch (err) {
//         console.log("Promise rejected!")
//     }
// }

// main()



//--------------------------------------------------------------



// function getStudentInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const user={ name:"tanya",
//             email:"tp@gmail",
//             age:21}
//             resolve(user)
//         },2000)
//     })
// }

// async function main() {
//     try{
//     const res=await getStudentInfo()
//     console.log(res)
//     console.log("Program Completed")
//     }
//     catch{
//         console.log("user not found")
//     }
// }
// main()



//--------------------------------------------------------


// function getStudentInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const user={ name:"tanya",
//             email:"tp@gmail",
//             age:21}
//             resolve(user)
//         },2000)
//     })
// }

// function display({name,age}){
//     console.log(name,age)
// }
// async function main() {
//     try{
//     const res=await getStudentInfo()
//     display(res)
//     console.log("Program Completed")
//     }
//     catch{
//         console.log("user not found")
//     }
// }
// main()



//--------------------------------------------------------


// function getStudentInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const user={ name:"tanya",
//             email:"tp@gmail",
//             age:21}
//             resolve(user)
//         },2000)
//     })
// }

// function getAttendanceInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend="present"
//             if(attend=="present")resolve("present")
//         },1000)
//     })
// }

// function getExamInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const marks=89
//            if(marks>80)
//             resolve("pass")
//         },3000)
//     })
// }

// async function main() {
//     try{
//     const res=await Promise.all([getStudentInfo(),getAttendanceInfo(),getExamInfo()])
//     console.log(res)
//     console.log("Program Completed")
//     }
//     catch{
//         console.log("user not found")
//     }
// }
// main()



//------------------------------------------------------------


// const students=[
//     {id:1,name:"vansh",attendance:90,score:80},
//     {id:2,name:"tanya",attendance:70,score:60},
// ]

// function getStudentInfo(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const user=students.find((e)=>e.id===id)
//             if(user)resolve(user.name)
//                 else reject("Student not found")
//         },2000)
//     })
// }

// function getAttendanceInfo(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend=students.find((e)=>e.id===id && e.attendance>=90)
//             if(attend)resolve("present")
//                 else reject("low addtendance")
//         },1000)
//     })
// }

// function getExamInfo(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const marks=students.find((e)=>e.id===id && e.score>=80)
//            if(marks)resolve("pass")
//             else reject("low marks")
//         },3000)
//     })
// }

// async function main() {
//     const id=2
//     try{
//     const res=await Promise.all([getStudentInfo(id),getAttendanceInfo(id),getExamInfo(id)])
//     console.log(res)
//     console.log("Student promoted")
//     }
//     catch{
//         console.log("Failed")
//     }
// }
// main()



//----------------------------------------------------------------------



// const students=[
//     {id:1,name:"vansh",s1:true, s2:true,s3:false},
//     {id:2,name:"tanya",s1:true,s2:true,s3:true},
//     {id:3,name:"surya",s1:false,s2:true,s3:true}
// ]

// function getStudentInfo(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const user=students.find((e)=>e.id===id)
//             if(user)resolve("student")
//                 else reject("Student not found")
//         },2000)
//     })
// }

// function getAttendanceInfo1(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend=students.find((e)=>e.id===id && e.s1===true)
//             if(attend)resolve("present")
//                 else reject("absent")
//         },1000)
//     })
// }

// function getAttendanceInfo2(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend=students.find((e)=>e.id===id && e.s2===true)
//             if(attend)resolve("present")
//                 else reject("absent")
//         },1000)
//     })
// }

// function getAttendanceInfo3(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const marks=students.find((e)=>e.id===id && e.s3===true)
//            if(marks)resolve("present")
//             else reject("absent")
//         },1000)
//     })
// }

// async function main() {
//     const id=2
//     try{
//     const res=await Promise.all([getStudentInfo(id),getAttendanceInfo1(id),getAttendanceInfo2(id),getAttendanceInfo3(id)])
//     console.log(res)
//     console.log("student is present")
//     }
//     catch{
//         console.log("absent")
//     }
// }
// main()



//----------------------------------------------------------------------


// const students=[
//     {id:1,name:"vansh",s1:true, s2:true,s3:false},
//     {id:2,name:"tanya",s1:true,s2:true,s3:true},
//     {id:3,name:"surya",s1:false,s2:true,s3:true},
//     {id:4,name:"aayu",s1:false,s2:false,s3:false}
// ]

// function getStudentInfo(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const user=students.find((e)=>e.id===id)
//             if(user)resolve("student")
//                 else reject("Student not found")
//         },2000)
//     })
// }

// function getAttendanceInfo1(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend=students.find((e)=>e.id===id && e.s1===true)
//             if(attend)resolve("present")
//                 else reject("absent")
//         },1000)
//     })
// }

// function getAttendanceInfo2(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend=students.find((e)=>e.id===id && e.s2===true)
//             if(attend)resolve("present")
//                 else reject("absent")
//         },1000)
//     })
// }

// function getAttendanceInfo3(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const marks=students.find((e)=>e.id===id && e.s3===true)
//            if(marks)resolve("present")
//             else reject("absent")
//         },1000)
//     })
// }

// async function main() {
//     const id=2
//     const found=await getStudentInfo(id)
//     try{
//     const res=await Promise.all([getAttendanceInfo1(id),getAttendanceInfo2(id),getAttendanceInfo3(id)])
//     console.log(res)
//     console.log("student is present")
//     }
//     catch{
//         console.log("absent")
//     }
// }
// main()



//-------------------------------------------------------------------------


// const students=[
//     {id:1,name:"vansh",s1:true, s2:true,s3:false},
//     {id:2,name:"tanya",s1:true,s2:true,s3:true},
//     {id:3,name:"surya",s1:false,s2:true,s3:true},
//     {id:4,name:"aayu",s1:false,s2:false,s3:false}
// ]

// function getStudentInfo(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const user=students.find((e)=>e.id===id)
//             if(user)resolve("student")
//                 else reject("Student not found")
//         },3000)
//     })
// }

// function getAttendanceInfo1(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend=students.find((e)=>e.id===id && e.s1===true)
//             if(attend)resolve("present")
//                 else reject("absent")
//         },1000)
//     })
// }

// function getAttendanceInfo2(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const attend=students.find((e)=>e.id===id && e.s2===true)
//             if(attend)resolve("present")
//                 else reject("absent")
//         },4000)
//     })
// }

// function getAttendanceInfo3(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const marks=students.find((e)=>e.id===id && e.s3===true)
//            if(marks)resolve("present")
//             else reject("absent")
//         },6000)
//     })
// }

// async function main() {
//     const id=1
//     const found=await getStudentInfo(id)
//     try{
//     const res=await Promise.race([getAttendanceInfo1(id),getAttendanceInfo2(id),getAttendanceInfo3(id)])
//     console.log(res)
//     console.log("student is present")
//     }
//     catch{
//         console.log("absent")
//     }
// }
// main()



//--------------------------------------------------------------------


function p1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p1 success")
        },1000)
    })
}
function p2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("p2 success")
            reject("p2 failed")
        },1000)
    })
}
function p3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p3 success")
        },1000)
    })
}

async function main(){
    try{
        const res=await Promise.allSettled([p1(),p2(),p3()])
        console.log(res)
    }
    catch{
        console.log(err)
    }
}

main()