// External Modules
import { Router } from "express";

// Internal Modules
import { getInvestors, getOwners } from "../controllers/admin.controller.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";

const adminRoutes = Router();

adminRoutes.use(authenticationCheck);

adminRoutes.get("/investors", authorizationCheck(["admin"]), getInvestors);
adminRoutes.get("/owners", authorizationCheck(["admin"]), getOwners);

export default adminRoutes;
