console.log("Starting a new project");

//creating sxpress server
const express= require("express");
const app=express(); // express app object 
// response handler , listener
// app.use("/",(req,res)=>{
//     res.send("Hello from the server");
//      next();
// });
app.use("/test",(req,res)=>{
    res.send("Hello from the  testtttt serverrr");
});

app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello Hello ");
});

app.listen(3000, ()=> {
    console.log("server is successfully listening on port 3000");
});