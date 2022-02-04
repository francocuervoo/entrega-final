import { Router } from "express";

import { productsControllers } from "../controllers/index.js";
import validateAdmin from "../middlewares/validateAdmin.js";
import validateData from "../middlewares/validateProduct.js";

const productsRouter = Router();

productsRouter.get("/", productsControllers.getProducts);
productsRouter.get("/:id", productsControllers.getProducts);
productsRouter.post("/", validateAdmin, validateData, productsControllers.saveProduct);
productsRouter.delete("/:id", validateAdmin, productsControllers.deleteProduct);
productsRouter.put("/:id", validateAdmin, productsControllers.updateProduct);

export default productsRouter;

