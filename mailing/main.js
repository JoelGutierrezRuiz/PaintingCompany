const nodeMailer = require("nodemailer")
const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log("Nos hemos conectado")
})

app.post("/send-form", (req,res)=>{
    var transporter = nodeMailer.createTransport({
        host:"smtp.ethereal.email",
        post:587,
        secure:false,
        auth:{
            user:"alycia70@ethereal.email",
            pass:"hqvsGcuSYXXpA3BuvS"
        }
    })

    var mailOptions = {
        from:"Remitente",
        to:"joeloteruizote6@gmail.com",
        subject:"Enviado desde app",
        text:"Hola "
    }

    transporter.sendMail(mailOptions,(err,info)=>{
        err?console.log(err):console.log("EMail enviado")
    })

})