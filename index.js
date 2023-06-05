const express = require("express");

const app = express();

app.get("/home",async(req,res)=>{
    res.status(200).json({
        msg:"Ok From server 1"
    })
})

app.listen(3001,()=>{
    console.log('server at 3001 port')
})