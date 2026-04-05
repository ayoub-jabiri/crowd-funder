// External Modules
import { Router } from "express";

// Internal Modules
import { investors } from "../controllers/admin.controller.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";

const adminRoutes = Router();

adminRoutes.use(authenticationCheck);

adminRoutes.get("/investors", authorizationCheck(["admin"]), investors);

export default adminRoutes;
