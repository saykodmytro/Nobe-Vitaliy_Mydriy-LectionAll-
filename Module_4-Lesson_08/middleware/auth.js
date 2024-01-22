const jwt = require("jsonwebtoken");

const User = require("../models/user");

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (typeof authHeader === "undefined") {
    return res.status(401).send({ message: "Invalid token - 1" });
  }

  const [bearer, token] = authHeader.split(" ", 2);

  if (bearer !== "Bearer") {
    return res.status(401).send({ message: "Invalid token - 2" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token - 3" });
    }

    const user = await User.findById(decode.id);

    if (user === null) {
      return res.status(401).send({ message: "Invalid token - 4" });
    }

    if (user.token !== token) {
      return res.status(401).send({ message: "Invalid token - 5" });
    }

    req.user = {
      id: decode.id,
      name: decode.name,
    };

    next();
  });
}

module.exports = auth;
