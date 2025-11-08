const pool = require('../config/database');

const ProjectModel = {
  // Get all projects
  async findAll() {
    const result = await pool.query(
      'SELECT * FROM projects ORDER BY created_at DESC'
    );
    return result.rows;
  },

  // Get project by ID
  async findById(id) {
    const result = await pool.query(
      'SELECT * FROM projects WHERE id = $1',
      [id]
    );
    return result.rows[0];
  },

  // Create new project
  async create(projectData) {
    const { name, description, repo_url, gitea_id } = projectData;
    const result = await pool.query(
      'INSERT INTO projects (name, description, repo_url, gitea_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, repo_url, gitea_id]
    );
    return result.rows[0];
  },

  // Update project
  async update(id, projectData) {
    const { name, description, repo_url } = projectData;
    const result = await pool.query(
      'UPDATE projects SET name = $1, description = $2, repo_url = $3 WHERE id = $4 RETURNING *',
      [name, description, repo_url, id]
    );
    return result.rows[0];
  },

  // Delete project
  async delete(id) {
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);
    return { success: true };
  },

  // Get tasks for a project
  async getTasks(projectId) {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE project_id = $1 ORDER BY created_at DESC',
      [projectId]
    );
    return result.rows;
  }
};

module.exports = ProjectModel;