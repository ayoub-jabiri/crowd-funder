// Internal Modules
import {
    getOpenProjects,
    getProjectDetails,
} from "../services/invetment.service.js";
import { errorResponse } from "../utils/error.response.js";

export const openProjects = async (req, res) => {
    try {
        const projects = await getOpenProjects();

        res.json(projects);
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};

export const projectDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await getProjectDetails(id);

        res.json(project);
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};
