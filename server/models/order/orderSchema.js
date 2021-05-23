const mongoose = require("mongoose");
const mongodb = require("mongoose");

const orderSchema = mongodb.Schema(
  {
    items: [
      {
        product: {
          type: Object,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
    totalQuantity: {
      type: Number,
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

module.exports = mongodb.model("Order", orderSchema);
