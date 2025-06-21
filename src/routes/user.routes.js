const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, userController.getUsers);
router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], userController.register);
router.post('/login', userController.login);

module.exports = router;