const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { addBus,  showBus, deleteBus } = require('../controllers/admin');

// Use the authenticateToken middleware for admin routes
router.post('/addBus', authenticateToken, addBus);

router.get('/buses', authenticateToken, showBus);
router.delete('/buses/:id', authenticateToken, deleteBus);

module.exports = router;
