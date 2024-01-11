require("dotenv").config();

const express = require("express");

const routes = require("./routes/index");

require("./db");

const app = express();

app.use("/api", routes);

app.listen(8080, () => {
  console.log("Serv started 8080");
});
