const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { addBus, createRoute, showBus } = require('../controllers/admin');

// Use the authenticateToken middleware for admin routes
router.post('/addBus', authenticateToken, addBus);
router.post('/createRoute', authenticateToken, createRoute);
router.get('/buses', authenticateToken, showBus);

module.exports = router;
