// import express, { json } from 'express'
// const app=express()

// app.listen(8080)

// const logger=(req,res,next)=>{
//     req.message=("this is logger fun")
//     // console.log(req.url);
//     next()
// }

// // app.use(logger)


// app.get("/",logger,(req,res)=>{                      // we can use middleware here only to use in this route 
//     // res.end()                                      //end the req res cycle             
//     console.log(req.message)
//     res.json(req.url);                                
// })

// app.get("/home",(req,res)=>{
//     res.json(req.url);  
// })


//--------------------------------------------------------------------------------------------------------------


import express from 'express'
const app=express()

app.listen(8081)

const auth = (req, res, next) => {
    if (req.url==="/1234") {
        next(); 
    } else {
        res.send("Not Valid");
    }
};

app.use(auth)
app.get("/:id",auth,(req,res)=>{                      
    res.send("welcome")                                
})


