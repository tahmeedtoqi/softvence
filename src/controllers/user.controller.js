const UserService = require('../services/user.service');

exports.getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const result = await UserService.registerUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await UserService.loginUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
