// External Modules
import { Router } from "express";

// Internal Modules
import { getBalance } from "../controllers/balance.controller.js";
import {
    authenticationCheck,
    authorizationCheck,
} from "../middlewares/auth.middleware.js";

const balanceRoutes = Router();

balanceRoutes.use(authenticationCheck);

balanceRoutes.get("/", authorizationCheck(["investor"]), getBalance);

export default balanceRoutes;
