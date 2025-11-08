async function fetchProjects() {
  try {
    const response = await fetch("/api/projects");
    const data = await response.json();

    const listContainer = document.getElementById("project-list");
    listContainer.innerHTML = "";

    if (data.success && data.projects.length) {
      data.projects.forEach((p) => {
        const item = document.createElement("div");
        item.className = "project-card";
        item.innerHTML = `
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <small><b>Mentor:</b> ${p.mentor}</small> |
          <small><b>Status:</b> ${p.status}</small>
        `;
        listContainer.appendChild(item);
      });
    } else {
      listContainer.innerHTML = "<p>No projects found.</p>";
    }
  } catch (err) {
    console.error("Error loading projects:", err);
  }
}

// Run on page load
window.addEventListener("DOMContentLoaded", fetchProjects);
