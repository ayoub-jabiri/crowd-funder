// External Modules
import { body, validationResult } from "express-validator";

// Internal Modules
import { errorResponse } from "../utils/error.response.js";

export const invetmentRules = [
    body("amount")
        .isInt({ min: 1 })
        .withMessage(
            "The investment amount is required and must be greater than 0"
        ),
];

export const invetmentValidation = (req, res, next) => {
    const validation = validationResult(req);

    if (!validation.isEmpty())
        return res.status(400).json({ errors: validation.errors });

    next();
};
