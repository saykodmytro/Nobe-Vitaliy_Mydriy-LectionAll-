const User = require("../models/user");

async function register(req, res, next) {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user !== null) {
      return res.status(409).send({ message: "User already register" });
    }
    await User.create({ name, email, password });
    res.send("Register");
  } catch (error) {
    next(error);
  }

  //   try {
  //     const user = await User.findOne({ email });

  //     if (user !== null) {
  //       return res.status(409).send({ message: "User already register" });
  //     }

  //     const passwordHash = await bcrypt.hash(password, 10);

  //     await User.create({ name, email, password: passwordHash });

  //     res.status(201).send({ message: "Registration successfully" });
  //   } catch (error) {
  //     next(error);
  //   }
}

module.exports = { register };
