// Internal Modules
import { getInvestorBalance } from "../services/balance.service.js";
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
