import { Router } from "express";
import * as AuthMiddleware from "../middlewares/auth.middleware.js";
import { cartView, loginView } from "../controllers/carts.controllers.js"

const viewsRouter = Router();

viewsRouter.get("/cart", AuthMiddleware.checkAuthentication, cartView)
viewsRouter.get("/login", loginView)

export default viewsRouter;