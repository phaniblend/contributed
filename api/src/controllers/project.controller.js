const ProjectModel = require('../models/project.model');

const ProjectController = {
  // GET /api/projects - List all projects
  async getAllProjects(req, res) {
    try {
      const projects = await ProjectModel.findAll();
      res.json({ success: true, data: projects });
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch projects' });
    }
  },

  // GET /api/projects/:id - Get project by ID
  async getProjectById(req, res) {
    try {
      const { id } = req.params;
      const project = await ProjectModel.findById(id);
      
      if (!project) {
        return res.status(404).json({ success: false, error: 'Project not found' });
      }
      
      res.json({ success: true, data: project });
    } catch (error) {
      console.error('Error fetching project:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch project' });
    }
  },

  // POST /api/projects - Create new project
  async createProject(req, res) {
    try {
      const project = await ProjectModel.create(req.body);
      res.status(201).json({ success: true, data: project });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ success: false, error: 'Failed to create project' });
    }
  },

  // GET /api/projects/:id/tasks - Get tasks for a project
  async getProjectTasks(req, res) {
    try {
      const { id } = req.params;
      const tasks = await ProjectModel.getTasks(id);
      res.json({ success: true, data: tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch tasks' });
    }
  }
};

module.exports = ProjectController;