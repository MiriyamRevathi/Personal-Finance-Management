import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    accountName: { type: String, required: true },
    type: { type: String, required: true }, // e.g., "savings", "checking"
    balance: { type: Number, required: true, default: 0 },
    plaidAccessToken: { type: String }, // for Plaid integration
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // reference to the user
  },
  { timestamps: true }
);

export default mongoose.model("Account", accountSchema);
