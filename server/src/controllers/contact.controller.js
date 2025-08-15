import { StatusCodes } from "http-status-codes";
import { sendMail } from "../utils/index.js";
import dotenv from "dotenv";

dotenv.config();

export const contactSupport = async (req, res) => {
    try {
        const { email, subject, message } = req.body;

        if (!email || !subject || !message) {
            throw new Error("All fields are required");
        }

        const html = `
                        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                            <h2>New Client Message Received</h2>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Subject:</strong> ${subject}</p>
                            <p><strong>Message:</strong></p>
                            <div style="background:#f4f4f4; padding:10px; border-radius:5px;">${message}</div>
                        </div>
                    `;

        await sendMail({
            to: process.env.CONTACT_MAIL,
            subject: `New Support Request: ${subject}`,
            text: message,
            html,
            replyTo: email,
        });

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Your message has been sent to support",
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};

export const contactDeveloper = async (req, res) => {
    try {
        const { email, subject, message } = req.body;

        if (!email || !subject || !message) {
            throw new Error("All fields are required");
        }

        const html = `
                        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                            <h2>New Client Message Received</h2>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Subject:</strong> ${subject}</p>
                            <p><strong>Message:</strong></p>
                            <div style="background:#f4f4f4; padding:10px; border-radius:5px;">${message}</div>
                        </div>
                    `;

        await sendMail({
            to: process.env.CONTACT_MAIL,
            subject: `New Support Request: ${subject}`,
            text: message,
            html,
            replyTo: email,
        });

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Your message has been sent to developer",
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};