// External Modules
import "dotenv/config";
import express from "express";

// Internal Modules
import { dbConnect } from "./config/db.js";
import userRoutes from "./routes/user.router.js";
import projectRoutes from "./routes/project.router.js";
import balanceRoutes from "./routes/balance.router.js";
import investmentRoutes from "./routes/investment.router.js";

const app = express();

// Database Connection
const PORT = process.env.PORT;
dbConnect();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/balance", balanceRoutes);
app.use("/investment", investmentRoutes);

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
