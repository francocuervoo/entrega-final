import mongoose from "mongoose";
import config from "../src/config/config.js"
import { logConsol } from "./utils/logger.util.js"

mongoose.connect(config.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  logConsol("Conectado a la base de datos");
});
mongoose.connection.on("error", (err) => {
  logConsol(err)
});

export default mongoose.connection;
