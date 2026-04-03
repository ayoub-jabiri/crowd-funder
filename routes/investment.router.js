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
    projectExistenceCheck,
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
    projectExistenceCheck,
    projectDetails
);

investmentRoutes.put(
    "/projects/:id/invest",
    authorizationCheck(["investor"]),
    projectExistenceCheck,
    invetmentRules,
    invetmentValidation,
    projectInvest
);

export default investmentRoutes;
