import dotenv from 'dotenv';
dotenv.config();

const {
  MONGO_URI,
  PORT,
  EXPIRE,
  SECRET,
  MAIL_USER,
  MAIL_PASS,
  NODE_ENV,
} = process.env;


const config = {

  mongoDB: MONGO_URI,
  port: PORT,
  expire: EXPIRE,
  secret: SECRET,
  mailUser: MAIL_USER,
  mailPass: MAIL_PASS,
  nodeEnv: NODE_ENV,
}

export default config
