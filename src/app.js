console.log("Starting a new project");

//creating sxpress server
const express= require("express");
const app=express(); // express app object 
// response handler , listener 
//routes - /..
// app.use("/",(req,res)=>{  // this will over ride everyother route bec it swill match / 
//     res.send("Hello from the server");
//      next();
// });


//this will only handle GET call to /user
app.get("/user", (req,res)=>{
    res.send({fname: "nitesh", lname: " kumar"});
    // res.send("hllo user");
});

app.post("/user", (req,res)=>{
    //saving data to db
    res.send("user posted successfully");
});

app.delete("/user", (req,res)=>{
    res.send("user deleted successfully");
});

app.patch("/user", (req,res)=>{
    res.send("user patched successfully");
});

app.use("/test",(req,res)=>{
    res.send("Hello from the  teesttttt serverrr");
});
app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello Hello ");
});

app.use("/",(req,res)=>{  // if placed here then it cant override
    res.send("Hello from the server");
     next();
});

app.listen(3000, ()=> {
    console.log("server is successfully listening on port 3000");
});