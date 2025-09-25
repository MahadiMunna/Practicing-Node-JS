// models/attributeValue.model.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const attributeValueSchema = new Schema(
  {
    _id: { type: String, default: () => require("ulid").ulid() },

    attribute: {
      type: String, // references Attribute._id
      ref: "Attribute",
      required: true,
    },

    value: { type: String, required: true }, // e.g. "Manual", "Automatic"

    parent: {
      type: String, // self reference
      ref: "AttributeValue",
      default: null,
    },
  },
  {
    collection: "attribute_with_values",
    timestamps: true,
  }
);

const AttributeValue = mongoose.model("AttributeValue", attributeValueSchema);
module.exports = AttributeValue;
