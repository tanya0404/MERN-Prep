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


// import express from 'express'
// const app=express()

// app.listen(8081)

// const auth = (req, res, next) => {
//     if (req.url==="/1234") {
//         next(); 
//     } else {
//         res.send("Not Valid");
//     }
// };

// app.use(auth)
// app.get("/:id",(req,res)=>{                      
//     res.send("welcome")                                
// })


//---------------------------------------------------------------------------------------------------------



// import express from "express";
// const app = express();

// app.use(express.json());

// const auth = (req, res, next) => {
//     const token=req.body.token;
//     console.log(req.body)
//     if(token==="1234"){
//         next()
//     }
//     else{
//         res.send("Denied")
//     }
// };
// app.use(auth)
// app.post("/", (req, res) => {
//     res.send("Welcome");
// });

// app.listen(8081, () => {
//     console.log("Server running on port 8081");
// });


//------------------------------------------------------------------------------------------------------------


// import express from "express";
// const app = express();

// app.use(express.json());

// const auth = (req, res, next) => {
//     const token=req.headers.authorization;
//     // console.log(typeof(token))
//     const val=token.split(" ")
//     // console.log(val)
//     if(val[1]==="1234"){
//         next()
//     }
//     else{
//         res.send("Denied")
//     }
// };
// app.use(auth)
// app.get("/", (req, res) => {
//     res.send("Welcome");
// });

// app.listen(8081, () => {
//     console.log("Server running on port 8081");
// });


//----------------------------------------------------------------------------------------------------------------


import express from "express";
const app = express();

app.use(express.json());
const jwt=Math.round(Math.random()*10000).toString();
console.log(jwt)

const auth = (req, res, next) => {
    const token=req.headers.authorization;

    const val=token.split(" ")
    if(val[1]===jwt){
        next()
    }
    else{
        res.send("Denied")
    }
};

app.post("/login",(req,res)=>{
    res.send(jwt)
})

app.get("/",auth, (req, res) => {
    res.send("Welcome");
});

app.listen(8081, () => {
    console.log("Server running on port 8081");
});