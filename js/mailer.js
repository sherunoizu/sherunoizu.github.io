require('dotenv').config();


const nodemailer = require('nodemailer');

console.log(process.env.EMAIL);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: 'n79161418450@gmail.com',
    to: 'n79161418450@gmail.com',
    subject: 'Письмо отправленное через 1231234',
    text: 'Текст самого письма'
};

transporter.sendMail(mailOptions);//объект с настройками, колбек в случае ошибки

