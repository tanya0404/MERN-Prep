import express from 'express'
const app=express()

// app.get("/",(req,res)=>{
//     const user={
//         name:"tanya",
//         email:"tp@gmail.com",
//         role:"student"
//     }
//     res.json(user)
// })

app.use(express.json())

let user=[{
    id:1,name:"john",email:"john@gmail.com",role:"student"},
{id:2,name:"Cbjed",email:"dwsd@gmail.com",role:"student"},{id:3,name:"wdd",email:"wsd@gmail.com",role:"admin"}]

app.get("/",(req,res)=>{
    res.json(user)
})

app.post("/",(req,res)=>{                    //here we are adding new object in array
    const newuser=req.body
    user.push(newuser)
    res.json(user)
})

app.get("/:id",(req,res)=>{                   //find the id and printing that object only
    const num=Number(req.params.id)
    const find=user.find((e)=>
        e.id===num
    )


    res.json(find)
})


app.listen(8080)