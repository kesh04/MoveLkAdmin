const express = require('express');
const  mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Admin = require("./routes/Admin")
const mongoUrl = "mongodb+srv://keshana004:admin@cluster0.fcc8ic8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const cors = require('cors');
const UserAdmin = require("./routes/userAdmin")
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>{
    res.send({status:"start"})
})

app.use(bodyParser.json());

app.use("/api/auth", Admin);
app.use("/api/auth", UserAdmin)


mongoose.connect(mongoUrl).then(() =>{
    console.log("database connectd ");
}).catch((e)=>{
    console.log(e);
})



app.listen(5000, ()=>{
    console.log("node js serever is started");

})

