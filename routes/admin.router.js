// External Modules
import { Router } from "express";

// Internal Modules
import { getAdmin } from "../controllers/admin.controller.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";

const adminRoutes = Router();

adminRoutes.use(authenticationCheck);

adminRoutes.get("/", authorizationCheck(["admin"]), getAdmin);

export default adminRoutes;
