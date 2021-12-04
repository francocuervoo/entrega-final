import express from "express";
import cors from "cors";
import apiRouter from "./routes/api.router.js";
import userRouter from "./routes/auth.route.js";

// Server app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter).use("/", userRouter);

export default app;
