// External Modules
import { Router } from "express";

// Internal Modules
import { register } from "../controllers/project.controller.js";

const projectRoutes = Router();

projectRoutes.post("/register", register);

export default projectRoutes;
