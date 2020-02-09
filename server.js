const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Define middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds049347.mlab.com:49347/heroku_b8gr0xth");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/glucose-tracker");
app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}!`);
});
