const nodemailer = require('nodemailer')

const sendEmail = async (req,res) => {
let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'shanie49@ethereal.email',
            pass: '3GjBqKc1Tkb9D8uCKE'
        }
    });

    let info = await transporter.sendMail({
        from: '"Akin" <hakra3310@gmail.com>', 
        to: "pbrandng@gmail.com", 
        subject: "Hello ✔", 
        html: "<h2>Testing Email with Akin</h2>", 
    });
    res.json(info)
}
module.exports = sendEmail;