import express from 'express'
const app=express()
app.listen(8083),()=>{
    console.log("server is running")
}

// app.get("/:id",(req,res)=>{
//     console.log(req.url);
//     console.log(req.params)
//     res.send(req.params.id)
// })

// app.get("/:id/:email",(req,res)=>{
//     console.log(req.url)
//     console.log(req.params)
//     res.send(req.params.id+req.params.email)
// })

// app.get("/id/:id/email/:email",(req,res)=>{
//     console.log(req.url)
//     console.log(req.params)
//     res.send(req.params.id+req.params.email)
// })

// app.get("/hello",(req,res)=>{                          //it will not work as we gave the "/:id" route already so it will cosider this also as same route
//     res.send("hello world")
// })


//--------------------------------------------------------------------------------------------------


// app.get("/:n1/:n2",(req,res)=>{
//     console.log(req.url)
//     console.log(req.params)
//     res.send(req.params.n1+req.params.n2)
// })

// app.get("/:n1/:n2/:n3",(req,res)=>{
//     console.log(req.url)
//     console.log(req.params)
//     res.send(req.params.n1+req.params.n2+req.params.n3)
// })

// app.get("/:a/:b/:c/:d",(req,res)=>{
//     console.log(req.url)
//     console.log(req.params)
//     res.send(req.params.a+req.params.b+req.params.c+req.params.d)
// })