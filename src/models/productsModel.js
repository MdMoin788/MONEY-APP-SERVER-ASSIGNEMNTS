const mongoose = require("mongoose");
const productsSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = mongoose.model("product", productsSchema);
