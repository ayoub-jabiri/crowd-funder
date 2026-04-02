import { Schema, model } from "mongoose";

const balanceSchema = new Schema({
    balance: {
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

export default model("Balance", balanceSchema);
