import { Router } from "express";
import * as AuthMiddleware from "../middlewares/auth.middleware.js";
import { cartView, loginView, signupView } from "../controllers/views.controller.js"

const viewsRouter = Router();

viewsRouter.get("/cart", AuthMiddleware.checkAuthentication, cartView)
viewsRouter.get("/login", loginView)
viewsRouter.get("/signup", signupView)


export default viewsRouter;