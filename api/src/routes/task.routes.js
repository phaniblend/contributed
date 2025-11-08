const express = require('express');
const router = express.Router();

// GET /api/tasks
router.get('/', (req, res) => {
  res.json({ message: 'List tasks' });
});

// GET /api/tasks/:id
router.get('/:id', (req, res) => {
  res.json({ message: 'Get task details' });
});

// POST /api/tasks/:id/claim
router.post('/:id/claim', (req, res) => {
  res.json({ message: 'Claim task' });
});

module.exports = router;