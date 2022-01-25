import { Router } from "express";
import { upload } from ".././utils/multer.util.js";
import { uploadsController } from ".././controllers/uploads.controller.js";

const uploadsRouter = Router();

uploadsRouter.post("/", upload.single("file"), uploadsController);

export default uploadsRouter;
