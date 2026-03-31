import { Schema, model } from "mongoose";

const investmentSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    investorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});

export default model("Investment", investmentSchema);
