const prisma = require("../../prisma/client");
const bcrypt = require("bcryptjs");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { email, password, username, phoneNo, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    let user;

    if (role === "admin") {
      user = await prisma.admin.create({
        data: {
          email,
          username,
          phoneNo,
          password: hashedPassword,
        },
      });
    } else {
      user = await prisma.volunteer.create({
        data: {
          email,
          username,
          phoneNo,
          password: hashedPassword,
          availability: "no", // default
        },
      });
    }

    res.json({ message: "Registered successfully", user, role });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await prisma.admin.findUnique({ where: { email } });
    let role = "admin";

    if (!user) {
      user = await prisma.volunteer.findUnique({ where: { email } });
      role = "volunteer";
    }

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({
      message: "Login successful",
      user,
      role
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};