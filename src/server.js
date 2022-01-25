// Método del after para no repetir console.log
export const clog = console.log.bind(console);

import app from "./express.app.js";
import "./db.js";
import session from "express-session";
import passport from "./utils/passport.util.js";
import apiRouter from "./routes/api.router.js";
import viewsRouter from "./routes/views.router.js";
import config from "../src/config/config.js"

app.use(
  session({
    secret: config.secret,
    cookie: {
      maxAge: Number(config.expire),
    },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", apiRouter);
app.use("/", viewsRouter);

// Express Server
const PORT = config.port || 3000;
const server = app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
server.on("error", (err) => console.log(err));
