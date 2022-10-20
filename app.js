const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const user = require("./models/user");

const app = express();
app.use(express.static("./public"));
app.use(bodyparser.json());
app.use(cors());

app.get("/post",async(req,res)=>{
    const data = await user.find();
    res.json(data);
});

app.get("/post/:userID",async(req,res)=>{
    const data = await user.findById(req.params.userID);
    res.json(data);
});

app.put("/post/:userID",async(req,res)=>{
    const data = await user.findOneAndUpdate(
        {_id:req.params.userID},
        {$set:req.body}
    );
    res.json(data);
});

app.delete("/post/:userID",async(req,res)=>{
    const data = await user.findOneAndRemove(
        {_id:req.params.userID}
    );
    res.json(data);
});

app.post("/post",async(req,res)=>{
    try{
        const newUser = new user(req.body);
        const data = await newUser.save();
        res.json(data);
    }catch(err){
        console.log(err);
    }
});


mongoose.connect(
    "mongodb+srv://shrubex:shrubex123@shubs.s0b9nol.mongodb.net/?retryWrites=true&w=majority",
    (data)=>{
        if(data)console.log("server error while connecting to database. "+data);
        else console.log("connected succesfully.");
    }
);
let listenport = process.env.PORT || 3000;
app.listen(listenport,()=>{
    console.log("Server started at port 3000");
});