// External Modules
import { Router } from "express";

// Internal Modules
import { register } from "../controllers/project.controller.js";
import {
    projectRules,
    projectValidation,
} from "../middlewares/project.middleware.js";

const projectRoutes = Router();

projectRoutes.post("/register", projectRules, projectValidation, register);

export default projectRoutes;
