const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
.then(()=>{
    console.log("Connection is successfully established with DB");
}).catch(()=>{
    console.log("Not connected with DB");
});



