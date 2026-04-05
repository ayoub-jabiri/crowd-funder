// Internal Modules
import { getUsers } from "../services/user.service.js";
import { errorResponse } from "../utils/error.response.js";

export const investors = async (req, res) => {
    try {
        const investors = await getUsers({ role: "investor" });

        res.json(investors);
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};
