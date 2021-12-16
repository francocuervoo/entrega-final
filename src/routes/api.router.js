import { Router } from "express";

import cartsRouter from "./carts.router.js";
import productsRouter from "./products.router.js";

const apiRouter = Router();

apiRouter.use("/carts/auth", cartsRouter);
apiRouter.use("/products/auth", productsRouter);

export default apiRouter;
