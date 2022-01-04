import express from "express";
import { blobRouter } from "./routes/blobs.js";
import { containerRouter } from "./routes/containers.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES

app.use("/storage/blob", blobRouter);
app.use("/storage/container", containerRouter);

app.listen(3000, () => console.log("http://localhost:3000"));
