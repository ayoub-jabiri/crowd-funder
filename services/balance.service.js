import Balance from "../models/balance.schema.js";

export const getInvestorBalance = async (investorId) =>
    await Balance.find({ investorId });
