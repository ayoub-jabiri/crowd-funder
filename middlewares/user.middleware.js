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
        .isIn(["admin", "owner", "investor"])
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

export const registerCheck = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await User.find({ email });

        // Check if the email is already taken
        if (user.length > 0)
            return errorResponse(res, 400, "The email is already exists!");

        next();
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error");
    }
};
