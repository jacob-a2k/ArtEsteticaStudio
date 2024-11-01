const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Nodemailer Transporter Setup (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jakub.a2k@gmail.com", // Your Gmail address
    pass: "hzsk zjdf emcs xjio", // Your Gmail App password
  },
});

// Route to send email
app.post("/send-email", (req, res) => {
  const { firstName, lastName, phoneNum, email, userText } = req.body;

  const mailOptions = {
    from: email,
    to: "jakub.a2k@gmail.com", // Destination email
    subject: `New message from ${firstName} ${lastName}`,
    text: `Osoba: ${firstName} ${lastName}\nEmail: ${email}\nTelefon:${phoneNum}\nWiadomość: ${userText}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .send({ success: false, message: "Email failed to send" });
    }
    res
      .status(200)
      .send({ success: true, message: "Email sent successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
