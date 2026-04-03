// External Modules
import { Router } from "express";

// Internal Modules
import {
    openProjects,
    projectDetails,
    projectInvest,
    getInvestments,
} from "../controllers/investment.controller.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";
import {
    invetmentRules,
    projectExistenceCheck,
    invetmentValidation,
    investmentCheck,
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
    investmentCheck,
    projectInvest
);

investmentRoutes.get(
    "/investments",
    authorizationCheck(["investor"]),
    getInvestments
);

export default investmentRoutes;
