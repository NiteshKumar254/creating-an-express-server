const mongoose=require("mongoose");
const connectDB=async()=>{
  
  await mongoose.connect(
    //connecting to whole cluster
    //"mongodb+srv://kumar183nitesh:KaJhroH16JAz1F7X@cluster2.cknc9ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2/"

   //connecting to specific db
    "mongodb+srv://kumar183nitesh:KaJhroH16JAz1F7X@cluster2.cknc9ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2/devTinder"
);
};

module.exports=connectDB;

