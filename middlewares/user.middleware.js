// External Modules
import { body, validationResult } from "express-validator";

// Internal Modules
import User from "../models/user.schema.js";
import { errorResponse } from "../utils/error.response.js";

export const userValidationRules = [
    body("name").notEmpty().withMessage("The name is required"),
    body("email").isEmail().withMessage("The email must be a valide email"),
    body("password").notEmpty().withMessage("The password is required"),
    body("role")
        .isIn(["user", "admin"])
        .withMessage(
            "The role is required and must be either 'user' or 'admin'"
        ),
];

export const dataValidation = (req, res, next) => {
    const validation = validationResult(req);

    if (!validation.isEmpty())
        return res.status(400).json({ errors: validation.errors });

    next();
};
