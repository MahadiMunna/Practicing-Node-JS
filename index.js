const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const attributeRoutes = require("./routes/attribute.routes");
const attributeValueRoutes = require("./routes/attribute_value.routes");

app.use(cors());
app.use(express.json());
app.use("/api", attributeRoutes, attributeValueRoutes);

const MONGO_URI = "mongodb://mongouser:pass@localhost:27017/mongoappdb?authSource=admin";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
  
  app.listen(port, ()=>{
      console.log(`Server is running on port ${port}`);
    })
    

    
    
    // const userSchema = new mongoose.Schema({
    //   name: { type: String, required: true },
    //   email: { type: String, required: true, unique: true }
    // });
    
    // const User = mongoose.model("User", userSchema);
    
    // app.post("/users", async (req, res) => {
    //   try {
    //     const { name, email } = req.body;
    //     const user = new User({ name, email });
    //     await user.save();
    //     res.status(201).json(user); // return created user
    //   } catch (err) {
    //     res.status(400).json({ error: err.message });
    //   }
    // });
    
    // app.get("/users", async (req, res) => {
    //   try {
    //     const users = await User.find(); // fetch all
    //     res.json(users);
    //   } catch (err) {
    //     res.status(500).json({ error: err.message });
    //   }
    // });
    
    // app.get("/users/:id", async (req, res) => {
    //   try {
    //     const user = await User.findById(req.params.id);
    //     if (!user) return res.status(404).json({ error: "User not found" });
    //     res.json(user);
    //   } catch (err) {
    //     res.status(500).json({ error: err.message });
    //   }
    // });