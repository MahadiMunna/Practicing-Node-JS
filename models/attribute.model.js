// models/attribute.model.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const attributeSchema = new Schema(
  {
    // ULID-like string ID (MongoDB already generates _id, but you can keep custom if needed)
    _id: { type: String, default: () => require("ulid").ulid() },

    name: { type: String, required: true, unique: true }, // e.g. "Transmission"
  },
  {
    collection: "attributes",
    timestamps: true,
  }
);

const Attribute = mongoose.model("Attribute", attributeSchema);
module.exports = Attribute;
