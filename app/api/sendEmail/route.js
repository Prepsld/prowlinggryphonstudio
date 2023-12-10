// /api/sendEmail/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { username, email, topic, comment } = await req.json();
  const apiKey = process.env.SENDGRID_API;

  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: apiKey,
    },
  });



  // Send the email
  const mailOptions = {
    from: "DavidPrepsl@gmail.com",
    to: "DavidPrepsl@gmail.com", // Replace with your email address
    subject: `New Contact Form Submission - ${topic}`,
    text: `
        Username: ${username}
        Email: ${email}
        Topic: ${topic}
        Comment: ${comment}
      `,
  };

  try {
      await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", mailOptions.messageId);
    return new Response(JSON.stringify({ error: "Email sent Successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
} 

