import express from 'express'
const app=express()

app.get("/",(req,res)=>{
    const user={
        name:"tanya",
        email:"tp@gmail.com",
        role:"student"
    }
    res.json(user)
})

app.listen(8080)