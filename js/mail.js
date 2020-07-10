
const SMTPConnection = require('nodemailer/lib/smtp-connection')
const nodemailer = require('nodemailer')
const data      = require('./data')


let sendMail = (name, to, subject, text) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "oliveijao@gmail.com",
            pass: 'JoaoKinGG'
    }})

        transporter.sendMail({
            from: name + "oliveijao@gmail.com",
            to: to,
            subject: "Uma breve pesquisa sobre " + subject,
            text: text,

        }).then (message =>{
        console.log(`== EMAIL ENVIADO COM SUCESSO ==`)
        }).catch(err =>{
        console.log(err)
    })
}

exports.sendMail = sendMail

