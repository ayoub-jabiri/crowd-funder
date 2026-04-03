// External Modules
import { Router } from "express";

// Internal Modules
import {
    openProjects,
    projectDetails,
    projectInvest,
} from "../controllers/investment.controller.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";
import {
    invetmentRules,
    invetmentValidation,
} from "../middlewares/investment.middleware.js";

const investmentRoutes = Router();

investmentRoutes.use(authenticationCheck);

investmentRoutes.get(
    "/projects/open",
    authorizationCheck(["investor"]),
    openProjects
);

investmentRoutes.get(
    "/projects/:id",
    authorizationCheck(["investor"]),
    projectDetails
);

investmentRoutes.put(
    "/projects/:id/invest",
    authorizationCheck(["investor"]),
    invetmentRules,
    invetmentValidation,
    projectInvest
);

export default investmentRoutes;
