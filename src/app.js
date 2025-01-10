import express from "express";
import filmRoutes from "./routes/filmRoutes.js";

const app = express();
app.use(express.json());

app.use("/films", filmRoutes);

export default app;
