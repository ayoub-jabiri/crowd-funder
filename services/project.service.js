import Project from "../models/project.schema.js";

export const registerProject = async (project) => await Project.create(project);

export const getProject = async (query) => await Project.findOne(query);
