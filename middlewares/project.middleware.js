// External Modules
import { body, validationResult } from "express-validator";

// Internal Modules
import { errorResponse } from "../utils/error.response.js";

export const projectRules = [
    body("title").notEmpty().withMessage("The project title is required"),
    body("description")
        .notEmpty()
        .withMessage("The project description is required"),
    body("capital")
        .isInt({ min: 1 })
        .withMessage(
            "The project capital is required and must be greater than 0"
        ),
    body("initialInvestment")
        .isInt()
        .withMessage("The project initialInvestment is required "),
    body("status")
        .isIn(["open", "closed"])
        .withMessage(
            "The role is required and must be either 'open' or 'closed'"
        ),
];

export const projectValidation = (req, res, next) => {
    const validation = validationResult(req);

    if (!validation.isEmpty())
        return res.status(400).json({ errors: validation.errors });

    next();
};
