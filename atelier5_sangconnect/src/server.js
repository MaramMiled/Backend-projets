import express from "express";
import donneurRoutes from "./routes/donneur.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import prisma from "./database/prisma.js";

const app = express();

app.use(express.json());

app.use("/api/donneurs", donneurRoutes);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
});