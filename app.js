const express = require("express");

const app = express();
let listenport = process.env.PORT || 80;
app.get("/",(req,res)=>{
    res.end("hello from shubham.");
});

app.listen(listenport,()=>{
    console.log("server started ");
});
