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

// app.use("/user",(req,res)=>{  // this will over ride everyother route bec it swill match / 
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

// app.use("/",(req,res)=>{  // if placed here then it cant override
//     res.send("Hello from the server");
//      next();
// });

//use of ? , + , (), * in routes
app.get(/ab+c/, (req,res)=>{
    res.send("+ working perfectly");
});

app.get(/ab?c/, (req,res)=>{
    res.send("? working perfectly");
});

app.get(/ab(dfg)?h/, (req,res)=>{ 
    res.send("() working perfectly");
});

app.get(/h*f/, (req,res)=>{ 
    res.send("* working perfectly");
});

app.get(/.*fly$/, (req,res)=>{ 
    res.send(" right,working perfectly");
});

//query 
app.get("/search", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//DYNAMIC ROUTES : PARAM
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
//   console.log(userId)
console.log(req.params);
  res.send(`User ID is ${userId}`);
});

//Multiple Dynamic Params
app.get("/posts/:postId/comments/:commentId", (req, res) => {
  const { postId, commentId } = req.params;
  console.log(req.params);
  res.send(`Post ID: ${postId}, Comment ID: ${commentId}`);
});














app.listen(3000, ()=> {
    console.log("server is successfully listening on port 3000");
});