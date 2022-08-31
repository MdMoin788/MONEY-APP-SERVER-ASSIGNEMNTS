const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    description: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = mongoose.model("review", reviewSchema);
