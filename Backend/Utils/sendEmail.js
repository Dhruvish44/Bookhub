const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // TODO : create a transporter
  var transport = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
      host: "archit.shukla.abc@gmail.com",
     port: "archit.shukla.abc@gmail.com",
    service: "Gmail",
    // auth: {
    //   user: process.env.EMAIL_USERNAME,
    //   pass: process.env.EMAIL_PASSWORD,
    // },
    auth: {
      user: "archit.shukla.abc@gmail.com",
      pass: "@Rchit123",
    },
  });

  // TODO : define the email options
  const mailOptions = {
    // from: process.env.EMAIL_USERNAME,
    from: "archit.shukla.abc@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  // TODO : Actually send the email
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
