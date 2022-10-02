const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  comments: [
    {
      user: { type: Schema.ObjectId },
      comment: { type: String },
    },
  ],
});

ProductsSchema.set("toJSON", { virtuals: true });
const ProductsModel = mongoose.model("Brand", ProductsModel);

module.exports = {
  ProductsSchema,
  ProductsModel,
};
