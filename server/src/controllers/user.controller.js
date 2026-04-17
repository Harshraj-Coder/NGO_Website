const userService = require("../services/user.service");

exports.getProfile = async (req, res) => {
  try {
    const user = await userService.getProfile(req.user.email);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};