
const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task.route.js");
const usersRoute = require("./routes/users.route.js");
const app = express();
require('dotenv').config(); // Loading environment variables from .env file
const cors = require('cors'); // Install cors middleware



// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Apply CORS middleware with allowed origin
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from React app's origin
}));

// routes
app.use("/api/tasks", taskRoute);

// routes
app.use("/api/users/", usersRoute);


// simple route
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


const password = process.env.PASSWORD; // Access password from environment variables
const encodedPassword = encodeURIComponent(password); // encoding for string error handling on the str_conn in mongoose.connect

// connecting to DB than running the server.
mongoose
  .connect(
    `mongodb+srv://sonimailfortestuse:${encodedPassword}@backenddb.yf5ipol.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });


module.exports = app;


