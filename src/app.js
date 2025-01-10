import express from "express";
import filmRoutes from "./routes/filmRoutes.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Star Wars API",
      version: "1.0.0",
      description: "API para gerenciamento de filmes Star Wars",
    },
  },
  apis: ["./src/routes/filmRoutes.js", "./src/controllers/filmController.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.use("/films", filmRoutes);

export default app;
