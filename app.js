const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task.route.js");
const usersRoute = require("./routes/users.route.js");
const app = express();
require('dotenv').config();
const cors = require('cors');

// Apply CORS middleware with allowed origin
app.use(cors({
  origin: 'https://react-app-psi-wheat.vercel.app', // Ensure this is the correct origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.options('*', cors()); // Enable pre-flight for all routes

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/tasks", taskRoute);
app.use("/api/users", usersRoute);

// simple route to show the api working
app.get("/", (req, res) => {
  res.send("Hello from Node API Server--expressApp!!");
});

const password = process.env.PASSWORD;
const encodedPassword = encodeURIComponent(password);

// connecting to DB then running the server.
mongoose
  .connect(
    `mongodb+srv://sonimailfortestuse:${encodedPassword}@backenddb.yf5ipol.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

module.exports = app;
