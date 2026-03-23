import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Save to MongoDB
        if (process.env.MONGO_URI) {
            try {
                const newContact = new Contact({ name, email, message });
                await newContact.save();
            } catch (err) {
                 console.error('MongoDB Contact save error:', err);
                 // We don't fail the request completely if DB fails, we still try email
            }
        }

        // Send Email Notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, 
                family: 4, // Force IPv4 to avoid ENETUNREACH
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, 
                replyTo: email,             
                subject: `New Portfolio Contact: ${name}`,
                text: `You have received a new contact submission from your portfolio!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
                        <h2>New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <blockquote style="background: #f9f9f9; border-left: 4px solid #ff7a00; padding: 10px;">${message}</blockquote>
                       </div>`
            };

            // Await this to ensure Render doesn't kill the thread before finishing
            try {
                await transporter.sendMail(mailOptions);
                console.log("Email sent successfully via Nodemailer");
            } catch (err) {
                console.error("Nodemailer failed to send email:", err);
            }
        } else {
            console.warn("EMAIL_USER or EMAIL_PASS not set in .env. Email dispatch skipped.");
        }

        // Instantly return success to the user!
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact route error:', error);
        res.status(500).json({ error: 'Internal server error processing contact request.' });
    }
});

export default router;
