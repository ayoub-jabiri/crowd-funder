// External Modules
import { Router } from "express";

// Internal Modules
import {
    openProjects,
    projectDetails,
} from "../controllers/investment.controller.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";

const investmentRoutes = Router();

investmentRoutes.use(authenticationCheck);

investmentRoutes.get(
    "/open-projects",
    authorizationCheck(["investor"]),
    openProjects
);

investmentRoutes.get(
    "/projects/:id",
    authorizationCheck(["investor"]),
    projectDetails
);

export default investmentRoutes;
