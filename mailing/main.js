const nodeMailer = require("nodemailer")
const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log("Nos hemos conectado")
})

app.post("/send-form", (req,res)=>{

})