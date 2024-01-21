const express = require("express");

const router = express.Router();

const authRouter = require("./auth");
const bookRoutes = require("./books");

const authMiddleware = require("../middleware/auth");

router.use("/auth", authRouter);
router.use("/books", authMiddleware, bookRoutes);

module.exports = router;
