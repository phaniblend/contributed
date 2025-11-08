const express = require('express');
const router = express.Router();

// GET /api/users/:id/portfolio
router.get('/:id/portfolio', (req, res) => {
  res.json({ message: 'Get user portfolio' });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  res.json({ message: 'Get user profile' });
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
  res.json({ message: 'Update user profile' });
});

module.exports = router;