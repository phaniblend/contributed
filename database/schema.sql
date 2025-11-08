-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  role VARCHAR(20) DEFAULT 'learner',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Projects
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  repo_url VARCHAR(255),
  gitea_id INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tasks
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty VARCHAR(20),
  status VARCHAR(20) DEFAULT 'open',
  assignee_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- PRs (Pull Requests)
CREATE TABLE prs (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  author_id INTEGER REFERENCES users(id),
  gitea_pr_id INTEGER,
  title VARCHAR(255),
  status VARCHAR(20) DEFAULT 'open',
  merged_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contributions
CREATE TABLE contributions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  pr_id INTEGER REFERENCES prs(id),
  score DECIMAL(5,2),
  created_at TIMESTAMP DEFAULT NOW()
);
