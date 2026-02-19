import express from 'express'
const app=express()
app.listen(8083),()=>{
    console.log("server is running")
}

app.get("/:id",(req,res)=>{
    console.log(req.url);
    console.log(req.params)
    res.send(req.params.id)
})

app.get("/:id/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email)
})

app.get("/id/:id/email/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email)
})

app.get("/hello",(req,res)=>{                          //it will not work as we gave the "/:id" route already so it will cosider this also as same route
    res.send("hello world")
})

