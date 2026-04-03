// External Modules
import { body, validationResult } from "express-validator";
import mongoose from "mongoose";

// Internal Modules
import { getProjectDetails } from "../services/invetment.service.js";
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

export const projectExistenceCheck = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return errorResponse(res, 400, "Invalid ID format");

        const project = await getProjectDetails(id);

        if (!project) return errorResponse(res, 404, "Project not found!");

        next();
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};

export const investmentCheck = async (req, res, next) => {
    const { id } = req.params;
    try {
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};
