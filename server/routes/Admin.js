

const express = require('express');
const router = express.Router();
const { adduser, loginuser, userData, logout, deleteUser, getAllUsers } = require('../controllers/user');

router.get('/getAllUsers', getAllUsers);
router.post('/register', adduser);
router.post('/Login', loginuser);
router.post('/user', userData);
router.post('/logout', logout);
router.post('/', deleteUser);

module.exports = router;
 