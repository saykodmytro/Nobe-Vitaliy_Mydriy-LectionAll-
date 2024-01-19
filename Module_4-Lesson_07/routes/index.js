const express = require("express");

const router = express.Router();

const authRouter = require("./auth");
const bookRoutes = require("./books");

router.use("/auth", authRouter);
router.use("/books", bookRoutes);

module.exports = router;
