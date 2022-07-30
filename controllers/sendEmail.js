const nodemailer = require('nodemailer')

const sendEmail = async (req,res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
        }
    });

    let emailInfo = await transporter.sendMail({
        from: '"Abdullah" <abdullahyahaya46@gmail.com>', 
        to: "abdullahyahaya46@gmail.com", 
        subject: "Hello ✔", 
        html: "<h2>Testing Email with Akin</h2>", 
    }, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log('🙂 😇  Message sent: %s', info.messageId);
        }
    });

    if(emailInfo) {
       return res.status(200).json({
            message: "MESSAGE_SENT",
            status: true,
            info: emailInfo
        });
    }
   
}
module.exports = sendEmail;