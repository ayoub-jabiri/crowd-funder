// External Modules
import { body, validationResult } from "express-validator";

// Internal Modules
import { errorResponse } from "../utils/error.response.js";
import { getUser } from "../services/user.service.js";

export const balanceRules = [
    body("amount")
        .isInt({ min: 1 })
        .withMessage(
            "The deposit amount is required and must be greater than 0"
        ),
];

export const balanceValidation = (req, res, next) => {
    const validation = validationResult(req);

    if (!validation.isEmpty())
        return res.status(400).json({ errors: validation.errors });

    next();
};
