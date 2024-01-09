const mongoose = require("mongoose");

const DB_URI = `mongodb+srv://student:0xQT0gqSMPo3IzBv@cluster0.e42dgc7.mongodb.net/`;

mongoose
  .connect(DB_URI)
  .then(() => console.info("Database connection successfully"))
  .catch((error) => console.error("Database connection error:", error));
