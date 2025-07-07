const adminAuth=(req,res,next)=>{
    const token="abc";
const isAuth=token==="abc";
console.log("authorization started");
if(!isAuth){
    res.status(402).send("unauthorized access");
}
else {
    next();
}
};
const userAuth =(req,res,next)=>{
    const token="xyz";
    const isUser=token==="xyz";
    if (!isUser){
        res.status(401).send("not authorized");

    }
    else {
        next();
    }
};
module.exports={
    adminAuth,
    userAuth
}