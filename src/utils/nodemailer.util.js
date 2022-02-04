import config from "../config/config.js"
import { logConsol } from "../utils/logger.util.js";

import { createTransport } from "nodemailer";

const transporterGmail = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: config.mailUser,
    pass: config.mailPass,
  },
});

export const sendGmail = async (receptor, tema, contenido) => {
  const mailOptions = {
    from: "E-Commerce App <franco.mbbsi.coderhouse@gmail.com>",
    to: receptor,
    subject: tema,
    html: contenido,
  };

  try {
    const response = await transporterGmail.sendMail(mailOptions);

    return response;
  } catch (error) {
    logConsol(error);
  }
};
