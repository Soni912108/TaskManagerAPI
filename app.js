const express = require("express");
const cors = require('cors'); // Install cors middleware
const http = require('http');
const app = express();

require('dotenv').config();
const server = http.createServer(app);
const connectToMongoDB = require('./db/mongodbConnection');

const taskRoute = require("./routes/task.route.js");
const usersRoute = require("./routes/users.route.js");


// Apply CORS middleware with allowed origin
app.use(cors({
  origin: `${process.env.APP_URL}`,
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
app.use("/api/users/", usersRoute);

// simple route
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated Version");
});

// Connect to MongoDB
connectToMongoDB();

module.exports = app;
