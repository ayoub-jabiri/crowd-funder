import Project from "../models/project.schema.js";

export const registerProject = async (project) => await Project.create(project);

export const getProject = async (query) => await Project.findOne(query);

export const deleteProject = async (projectId) =>
    await Project.deleteOne(projectId);

export const updateProject = async (id, newData) => {
    const project = await Project.findById(id);

    project.title = newData.title;
    project.description = newData.description;
    project.capital = newData.capital;
    project.initialInvestment = newData.initialInvestment;
    project.maxPercentage = newData.maxPercentage;
    project.status = newData.status;

    return await project.save();
};
