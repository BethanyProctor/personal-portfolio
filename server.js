// require('dotenv').config();
// const express = require("express");
// const router = express.Router();
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const PORT = process.env.PORT || 5000;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/', router);
// app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));

// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAILPASSWORD);

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "bethanyanneproctor@gmail.com",
//         pass: process.env.EMAILPASSWORD
//     }
// })

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("Ready to send an email")
//     }
// })

// router.post("/contact", (req,res) => {
//     const name =  req.body.firstName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone;
//     const mail = {
//       from: name,
//       to: 'bethanyanneproctor@gmail.com',
//       subject: "Contact Form Submission - Portfolio",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Phone: ${phone}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json(error);
//       } else {
//         res.json({ code: 200, status: "Message Sent" });
//       }
//     });
// })