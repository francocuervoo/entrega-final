// Método del after para no repetir console.log
export const clog = console.log.bind(console);

import app from "./express.app.js";
import "./db.js";
import session from "express-session";

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: Number(process.env.EXPIRE),
    },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  })
);

// Express Server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
server.on("error", (err) => console.log(err));