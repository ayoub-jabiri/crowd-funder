import Project from "../models/project.schema.js";

export const getOpenProjects = async () =>
    await Project.find({ status: "open" });

export const getProjectDetails = async (projectId) =>
    await Project.findById(projectId);
