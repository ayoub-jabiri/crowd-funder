// Internal Modules
import {
    getInvestorBalance,
    createBalance,
} from "../services/balance.service.js";
import { errorResponse } from "../utils/error.response.js";

export const getBalance = async (req, res) => {
    try {
        const balance = await getInvestorBalance(req.user._id);

        res.json(balance);
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};

export const create = async (req, res) => {
    try {
        const balance = await createBalance(req.user._id);
        res.status(201).json({
            message: "The balance has been registered successfully!",
            balance,
        });
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};
