const express = require("express");

const routes = require("./routes/index");

const app = express();

app.use("/api", routes);

// Handle 404
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Handle 500
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

module.exports = app;
