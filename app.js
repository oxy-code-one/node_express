const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.end("hello from shubham.");
});

app.listen(5000,()=>{
    console.log("server started ");
});
