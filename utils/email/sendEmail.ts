import nodemailer from "nodemailer";

export async function sendEmail(from: string, to: string, subject: string, html: string, replyTo?: string) {
  const transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 465, // or 587 for TLS
    secure: true, // True for port 465, false for 587
    auth: {
      user: process.env.SES_SMTP_USER,
      pass: process.env.SES_SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      replyTo
    });

    return { message: "Email sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email failed to send");
  }
}