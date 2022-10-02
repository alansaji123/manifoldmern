const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

BrandSchema.set("toJSON", { virtuals: true });
const BrandModel = mongoose.model("Brand", BrandSchema);

module.exports = {
  BrandSchema,
  BrandModel,
};
