const API_BASE = 'http://localhost:4000/api';

const api = {
  async get(endpoint) {
    const response = await fetch(`${API_BASE}${endpoint}`);
    return response.json();
  },
  
  async post(endpoint, data) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
