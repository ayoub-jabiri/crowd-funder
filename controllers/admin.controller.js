// Internal Modules
import { errorResponse } from "../utils/error.response.js";

export const getAdmin = async (req, res) => {
    try {
        res.json("balance");
    } catch (error) {
        console.error(error.message);
        errorResponse(res, 500, "An internal error occured!");
    }
};
