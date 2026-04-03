import Project from "../models/project.schema.js";
import Investment from "../models/investment.schema.js";

export const getOpenProjects = async () =>
    await Project.find({ status: "open" });

export const getProjectDetails = async (projectId) =>
    await Project.findById(projectId);

export const investInProject = async (projectId, amount, investorId) => {
    const project = await getProjectDetails(projectId);

    project.currentAmount += +amount;

    if (!project.investorsIds.includes(investorId))
        project.investorsIds.push(investorId);

    if (project.currentAmount == project.capital) project.status = "closed";

    await project.save();

    const amountPercentage = (+amount * 100) / project.capital;

    return await Investment.create({
        amount,
        investorId,
        projectId: project._id,
        percentageHeld: amountPercentage,
    });
};

export const getInvestorInvestments = async (investorId) => {
    const investments = await Investment.find({ investorId });

    const projects = await Project.find({ investorsIds: investorId });

    return [
        {
            investments,
            projects,
        },
    ];
};

export const getProjectInvestments = async (projectId, investorId) => {
    const investments = await Investment.aggregate([
        {
            $match: { projectId, investorId },
        },
        {
            $group: {
                _id: null,
                totalPercantage: { $sum: "$percentageHeld" },
            },
        },
    ]);

    return investments;
};
