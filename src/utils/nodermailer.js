import dotenv from 'dotenv';
dotenv.config();

import { createTransport } from "nodemailer";

const transporterGmail = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export const sendGmail = async (receptor, tema, contenido) => {

  const mailOptions = {

    from: 'E-Commerce App <ecommerce.app@gmail.com>',
    to: receptor,
    subject: tema,
    html: contenido 
  }

  try {

    const response = await transporterGmail.sendMail(mailOptions);
    
    return response

  } catch (error) { console.log(error) }
}