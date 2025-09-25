// routes/attribute.routes.js
const express = require("express");
const AttributeValue = require("../models/attributeValue.model");

const router = express.Router();

// Create attribute value
router.post("/attribute-values", async (req, res) => {
  try {
    const value = await AttributeValue.create(req.body);
    res.json(value);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/attribute-values", async (req, res) => {
  try {
    const value = await AttributeValue.find();
    res.json(value);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get attribute with values
router.get("/attribute-values/:id", async (req, res) => {
  try {
    const attr_val = await AttributeValue.findById(req.params.id)
      .populate({
        path: "attribute",       // the field to populate
        select: "name -_id"      // include only 'name', exclude '_id'
      })
      .populate({
        path: "parent",          // populate parent if exists
        select: "value attribute -_id",
        populate: {              // nested populate for parent's attribute name
          path: "attribute",
          select: "name -_id"
        }
      });

    if (!attr_val) {
      return res.status(404).json({ error: "AttributeValue not found" });
    }

    res.json(attr_val);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
