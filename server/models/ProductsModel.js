const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, default: 0 },
  ratings: [
    {
      user: { type: Schema.ObjectId },
      rating: { type: String },
    },
  ],
  comments: [
    {
      user: { type: Schema.ObjectId },
      comment: { type: String },
    },
  ],
});

ProductsSchema.set("toJSON", { virtuals: true });
const ProductsModel = mongoose.model("Product", ProductsSchema);

module.exports = {
  ProductsSchema,
  ProductsModel,
};
