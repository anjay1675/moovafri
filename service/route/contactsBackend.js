const Router = require("express").Router();
const nodemailer = require("nodemailer");

// in order to use gmail as a transporter smtp make sure you switch on less secure apps authentication for the account: link bellow
// https://myaccount.google.com/lesssecureapps
Router.route("/").post((req, res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;
    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'atikuanjabadachi@gmail.com',
            pass: 'chinban1675'
        }
    });
    const mailInfo = {
        from: email,
        to: 'atikuanjabadachi@gmail.com',
        subject: 'Testing Anjay project Again',
        html: `<h1>Mail from ${name} </h1><p> ${message} </p>`
    };
    transport.sendMail(mailInfo, function(err, info) {
        if(!err){
            res.status(200).json({status:'success', msg:`Message Sent Successfully`})
        }else{
            res.status(400).json("Error: "+err)
        }
    });
})

module.exports = Router;