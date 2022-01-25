import dotenv from 'dotenv';
dotenv.config();

const {
  MONGO_URI,
  PORT,
  EXPIRE,
  SECRET,
  MAIL_USER,
  MAIL_PASS,
} = process.env;


const config = {

  mongoSessions: MONGO_URI,
  port: PORT,
  expire: EXPIRE,
  secret: SECRET,
  mailUser: MAIL_USER,
  mailPass: MAIL_PASS,
}

export default config
