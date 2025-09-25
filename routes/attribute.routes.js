// routes/attribute.routes.js
const express = require("express");
const Attribute = require("../models/attribute.model");

const router = express.Router();

// Create attribute
router.post("/attributes", async (req, res) => {
  try {
    const attr = await Attribute.create(req.body);
    res.json(attr);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/attributes", async (req, res) => {
  try {
    const attr = await Attribute.find();
    res.json(attr);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/attributes/:id", async (req, res) => {
  try {
    const updatedAttr = await Attribute.findByIdAndUpdate(
      req.params.id,
      req.body,                // the fields you want to update, e.g., { name: "Body Style" }
      { new: true, runValidators: true }  // <- ensure validation and return updated doc
    );

    if (!updatedAttr) return res.status(404).json({ error: "Attribute not found" });
    res.json(updatedAttr);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// DELETE attribute
router.delete("/attributes/:id", async (req, res) => {
  try {
    const deletedAttr = await Attribute.findByIdAndDelete(req.params.id);
    if (!deletedAttr) return res.status(404).json({ error: "Attribute not found" });
    res.json({ message: "Attribute deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
