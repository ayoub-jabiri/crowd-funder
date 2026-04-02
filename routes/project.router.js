// External Modules
import { Router } from "express";

// Internal Modules
import { register, deletePr } from "../controllers/project.controller.js";
import {
    projectRules,
    projectValidation,
    projectCheck,
} from "../middlewares/project.middleware.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";

const projectRoutes = Router();

projectRoutes.use(authenticationCheck);

projectRoutes.post(
    "/register",
    authorizationCheck(["owner"]),
    projectRules,
    projectValidation,
    register
);

projectRoutes.delete(
    "/:id",
    authorizationCheck(["owner"]),
    projectCheck,
    deletePr
);

export default projectRoutes;
