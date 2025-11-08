import express from "express";
import { demoProjects } from "../seed/demoData.js";

const router = express.Router();

// GET /api/projects
router.get("/", (req, res) => {
  res.json({ success: true, projects: demoProjects });
});

export default router;
