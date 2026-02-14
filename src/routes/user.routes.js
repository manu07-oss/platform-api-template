const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

router.get('/', auth, controller.getUsers);
router.post('/', auth, controller.createUser);

module.exports = router;
