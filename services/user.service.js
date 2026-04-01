import User from "../models/user.schema.js";

export const registerUser = async (user) => await User.create(user);
