// External Modules

// Internal Modules
import { registerProject } from "../services/project.service.js";
import { errorResponse } from "../utils/error.response.js";

export const register = async (req, res) => {
    const { title, description, capital, initialInvestment, status } = req.body;
    const ownerId = req.user._id;
    try {
        const project = await registerProject({
            title,
            description,
            capital,
            initialInvestment,
            status,
            ownerId,
        });

        res.status(201).json({
            message: "The project has been registered successfully!",
            project,
        });
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};
