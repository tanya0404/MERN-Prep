import express from 'express'
const app=express()

// app.get("/name/:name",(req,res)=>{                             //http://localhost:8080/name/tanya
//     res.send("hello "+req.params.name);
// })


// app.get("/",(req,res)=>{                                       //http://localhost:8080/?name=tanya
//     res.send("hello "+req.query.name);
// })


// app.get("/",(req,res)=>{
//     res.send("hello "+req.query.name+" "+req.query.age);        //http://localhost:8080/?name=tanya&age=21
// })

app.listen(8080),()=>{
    console.log("server start")
}