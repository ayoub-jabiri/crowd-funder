// External Modules
import { config } from "dotenv";
import express from "express";

// Internal Modules

const app = express();

config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
