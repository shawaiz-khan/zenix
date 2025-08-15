import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.CONTACT_MAIL,
        pass: process.env.CONTACT_MAIL_PASSWORD,
    },
});

const sendMail = ({ to, subject, text, html, replyTo }) => {
    const mailOptions = {
        from: process.env.CONTACT_MAIL,
        to: to ?? process.env.CONTACT_MAIL,
        replyTo: replyTo ?? process.env.CONTACT_MAIL,
        subject,
        text,
        html,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) reject(error);
            else resolve(info);
        });
    });
};

export default sendMail;