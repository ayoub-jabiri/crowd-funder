// External Modules
import { config } from "dotenv";
import express from "express";

// Internal Modules
import { dbConnect } from "./config/db.js";
import userRoutes from "./routes/user.router.js";

const app = express();

// Database Connection
config();
const PORT = process.env.PORT;
dbConnect();

app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
