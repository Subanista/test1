const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductRoutes = require('./routes/ProductRoutes');

// Load environment variables
dotenv.config();

// Database connection
const connectDB = require("./config/db");
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api", ProductRoutes);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
