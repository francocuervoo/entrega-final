// Método del after para no repetir console.log
export const clog = console.log.bind(console);

import app from "./express.app.js";
import "./db.js";
import session from "express-session";
import passport from "./utils/passport.util.js";
import apiRouter from "./routes/api.router.js";
import userRouter from "./routes/auth.router.js";
import viewsRouter from "./routes/views.router.js";

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

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", apiRouter).use("/api", userRouter);
app.use("/", viewsRouter);

// Express Server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
server.on("error", (err) => console.log(err));
