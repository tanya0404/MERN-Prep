import express from 'express'
const app=express()
app.listen(8084),()=>{
    console.log("server is running")
}

app.get("/:n1/:n2",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.n1+req.params.n2)
})

app.get("/:n1/:n2/:n3",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.n1+req.params.n2+req.params.n3)
})

app.get("/:a/:b/:c/:d",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.a+req.params.b+req.params.c+req.params.d)
})
