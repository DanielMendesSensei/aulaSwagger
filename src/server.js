import express from "express";
import router from "./routes/user.route.js";
import dotenv from "dotenv";
import { swaggerSpec, swaggerUiServe, swaggerUiSetup } from "./swagger.js";
import cors from "cors";

dotenv.config();
const PORT = 3004;
const app = express();
const cors_config = { origin: "http://localhost:5501" };

// app.use(cors()); // Aberto a qualquer domínio
app.use(cors(cors_config)); // Aberto apenas para configuração feita

app.use(express.json());

app.use("/users", router);
app.use("/api-docs", swaggerUiServe, swaggerUiSetup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Rodando a api na port ${PORT}`);
});
