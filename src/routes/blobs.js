import { Router } from "express";
import multer from "multer";
import {
  uploadBlob,
  getBlob,
  downloadBlob,
  deleteBlob,
} from "../controllers/blob.js";

const upload = multer();

const blobRouter = Router();

blobRouter.post("/create", upload.single("file"), uploadBlob);
blobRouter.get("/get/:container/:filename", getBlob);
blobRouter.get("/download/:container/:filename", downloadBlob);

blobRouter.delete("/delete", deleteBlob);

export { blobRouter };
