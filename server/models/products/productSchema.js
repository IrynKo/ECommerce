const mongodb = require("mongoose");

const productSchema = mongodb.Schema({
  title: { type: String, required: true, unique: true },
  descr: { type: String, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
});

module.exports = mongodb.model("Product", productSchema);
