const express = require('express');
const router = express.Router();

// GET /api/prs
router.get('/', (req, res) => {
  res.json({ message: 'List pull requests' });
});

// GET /api/prs/:id
router.get('/:id', (req, res) => {
  res.json({ message: 'Get PR details' });
});

// POST /api/prs/:id/review
router.post('/:id/review', (req, res) => {
  res.json({ message: 'Submit PR review' });
});

module.exports = router;