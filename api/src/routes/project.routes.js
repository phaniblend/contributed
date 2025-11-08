const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/project.controller');

// GET /api/projects - List all projects
router.get('/', ProjectController.getAllProjects);

// GET /api/projects/:id - Get project by ID
router.get('/:id', ProjectController.getProjectById);

// POST /api/projects - Create new project
router.post('/', ProjectController.createProject);

// GET /api/projects/:id/tasks - Get tasks for a project
router.get('/:id/tasks', ProjectController.getProjectTasks);

module.exports = router;