const express = require("express");
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import router for the todo application
const todoRoutes = require("./routes/todos");

// Mount the todo API routes
app.use("/api/v1", todoRoutes);

// Default route
app.get("/", (req, res) => {
  res.send(`<h1>This is  NOT Homepage</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();
