import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    date: { type: Date, required: true, default: Date.now },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    merchant: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
