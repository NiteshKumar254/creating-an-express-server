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

//Handling multiple route handlers
//next()
//next fn and error with res.send()
//works similar for all like get , post , use...


//nothing is sent, server keeps waiting
// app.use("/learn", 
//     (req,res,next)=>{
//     //      next();
//     // res.send("worked req1");
//     console.log("worked well1");  
// });



// app.use("/learn", 
//     (req,res)=>{
//     res.send("worked req1");
//     console.log("worked well1"); 
// },
//  (req,res)=>{
//     res.send("worked req 2");
//     console.log("worked well2"); 
// });

// app.use("/learn", 
//     (req,res,next)=>{
//     res.send("worked req1");
//     console.log("worked well1"); 
//     next();
// },
//  (req,res)=>{
//      console.log("worked well2"); 
//     res.send("worked req 2");
   
// });

// app.use("/learn", 
//     (req,res,next)=>{
//     // res.send("worked req1");
//     console.log("worked well1"); 
//     next();
// },
//  (req,res)=>{
//      console.log("worked well2"); 
//     res.send("worked req 2");
   
// });


// app.use("/learn", 
//     (req,res,next)=>{
//          next();
//     res.send("worked req1");
//     console.log("worked well1"); 
   
// },
//  (req,res)=>{
//      console.log("worked well2"); 
//     res.send("worked req 2");
// });

// app.use("/learn", 
//     (req,res,next)=>{
//          next();
//     res.send("worked req1");
//     console.log("worked well1"); 
// },
//  (req,res,next)=>{
//      console.log("worked well2"); 
//     res.send("worked req 2");
//     next();
// });

//in array form:
// app.use("/route",[rh1,rh2,rh3,rh4])
// app.use("/route",[rh1,rh2],rh3,rh4])
// app.use("/route",rh1,rh2,[rh3],rh4])

// app.use("/learn", 
//     [(req,res,next)=>{
//          next();
//     // res.send("worked req1");
//     console.log("worked well1"); 
   
// },
//  (req,res,next)=>{
//      console.log("worked well2"); 
//     // res.send("worked req 2"); 
//       next();
// },
// (req,res,next)=>{
//      console.log("worked well3"); 
//     res.send("worked req 3");
   
// }]
// );

app.use("/learn", 
    [(req,res,next)=>{
         next();
    // res.send("worked req1");
    console.log("worked well1"); 
   
},
 (req,res,next)=>{
     console.log("worked well2"); 
    // res.send("worked req 2"); 
      next();
}],
(req,res,next)=>{
     console.log("worked well3"); 
    res.send("worked req 3");
   
}
);

//same routes can be written with different res.rev separately
// app.use("/apps",(req,res)=>{
//     console.log("app working");
//     res.send("app worked");
// });
// app.use("/apps",(req,res)=>{
//     console.log("app2 working");
//     res.send("app2 worked");
// });

// app.use("/apps",(req,res,next)=>{
//     console.log("app working");
//     res.send("app worked");
//     next();
// });
// app.use("/apps",(req,res)=>{
//     console.log("app 2working");
//     res.send("app 2worked");
// });

// app.use("/apps",(req,res,next)=>{
//     console.log("app working");
//     // res.send("app worked");
//     next();
// });
// app.use("/apps",(req,res)=>{
//     console.log("app 2 working");
//     res.send("app 2 worked");
// });

// app.use("/apps",(req,res,next)=>{
//     console.log("app working");
//     res.send("app worked");
//     next();
// });
// app.use("/apps",(req,res,next)=>{
//     console.log("app 2 working");
//     // res.send("app 2 worked");
//     next();
// });

//Handle auth midlleare for all requests
// app.use("/admin", (req,res,next)=>{
//     console.log("autorization started");
//     const token="nitesh";
//     const isAdminAuthorized= token=== "niitesh";
//     if (!isAdminAuthorized){
//         res.status(401).send("unauthorized request");
//     }
//     else{
//         next();
//     }
// });
// app.get("/about",(req,res)=>{
//     res.send("about data sent");
// })

// app.get("/admin/getAllData", (req,res)=>{
//     res.send("all user data sent");
// });

// app.get("/admin/deleteUser", (req,res)=>{
//     res.send("a user data deleted");
// });

//middleware use from other file - clean codes
const {adminAuth,userAuth}=require("./middlewares/auth");
//method 1
app.use("/admin",adminAuth);
app.get("/admin/getAllData", (req,res)=>{
    res.send("all user data sent");
});
app.get("/admin/deleteUser", (req,res)=>{
    res.send("a user data deleted");
});
//methpd 2:
app.use("/userrr",userAuth, (req,res)=>{
   res.send("autghorized user");
}
);









 













app.listen(3000, ()=> {
    console.log("server is successfully listening on port 3000");
});